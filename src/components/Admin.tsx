import { useState, useEffect, FormEvent } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { supabase, Skill, Project } from '../lib/supabase';

type SkillFormData = Omit<Skill, 'id' | 'created_at' | 'updated_at'>;
type ProjectFormData = Omit<Project, 'id' | 'created_at' | 'updated_at'>;

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'skills' | 'projects'>('skills');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const [skillForm, setSkillForm] = useState<SkillFormData>({
    name: '',
    category: '',
    level: 50,
    icon: 'Code',
    order_index: 0,
  });

  const [projectForm, setProjectForm] = useState<ProjectFormData>({
    title: '',
    description: '',
    detailed_description: '',
    technologies: [],
    image_url: '',
    github_url: '',
    demo_url: '',
    featured: false,
    order_index: 0,
  });

  useEffect(() => {
    if (activeTab === 'skills') {
      fetchSkills();
    } else {
      fetchProjects();
    }
  }, [activeTab]);

  const fetchSkills = async () => {
    const { data } = await supabase.from('skills').select('*').order('order_index');
    setSkills(data || []);
  };

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('order_index');
    setProjects(data || []);
  };

  const handleSkillSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (editingSkill) {
        await supabase.from('skills').update(skillForm).eq('id', editingSkill.id);
      } else {
        await supabase.from('skills').insert([skillForm]);
      }
      resetSkillForm();
      fetchSkills();
    } catch (error) {
      console.error('Error saving skill:', error);
    }
  };

  const handleProjectSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = {
        ...projectForm,
        technologies: Array.isArray(projectForm.technologies)
          ? projectForm.technologies
          : projectForm.technologies.split(',').map((t) => t.trim()),
      };

      if (editingProject) {
        await supabase.from('projects').update(data).eq('id', editingProject.id);
      } else {
        await supabase.from('projects').insert([data]);
      }
      resetProjectForm();
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const deleteSkill = async (id: string) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      await supabase.from('skills').delete().eq('id', id);
      fetchSkills();
    }
  };

  const deleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await supabase.from('projects').delete().eq('id', id);
      fetchProjects();
    }
  };

  const editSkill = (skill: Skill) => {
    setEditingSkill(skill);
    setSkillForm({
      name: skill.name,
      category: skill.category,
      level: skill.level,
      icon: skill.icon,
      order_index: skill.order_index,
    });
    setShowSkillForm(true);
  };

  const editProject = (project: Project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      detailed_description: project.detailed_description || '',
      technologies: project.technologies,
      image_url: project.image_url || '',
      github_url: project.github_url || '',
      demo_url: project.demo_url || '',
      featured: project.featured,
      order_index: project.order_index,
    });
    setShowProjectForm(true);
  };

  const resetSkillForm = () => {
    setSkillForm({
      name: '',
      category: '',
      level: 50,
      icon: 'Code',
      order_index: 0,
    });
    setEditingSkill(null);
    setShowSkillForm(false);
  };

  const resetProjectForm = () => {
    setProjectForm({
      title: '',
      description: '',
      detailed_description: '',
      technologies: [],
      image_url: '',
      github_url: '',
      demo_url: '',
      featured: false,
      order_index: 0,
    });
    setEditingProject(null);
    setShowProjectForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Admin Panel</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'skills'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Manage Skills
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Manage Projects
          </button>
        </div>

        {activeTab === 'skills' && (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setShowSkillForm(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Skill
              </button>
            </div>

            {showSkillForm && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {editingSkill ? 'Edit Skill' : 'Add New Skill'}
                  </h3>
                  <button onClick={resetSkillForm} className="text-gray-500 hover:text-gray-700">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <form onSubmit={handleSkillSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Skill Name"
                      required
                      value={skillForm.name}
                      onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Category"
                      required
                      value={skillForm.category}
                      onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Icon (lucide-react)"
                      value={skillForm.icon}
                      onChange={(e) => setSkillForm({ ...skillForm, icon: e.target.value })}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="number"
                      placeholder="Level (0-100)"
                      min="0"
                      max="100"
                      required
                      value={skillForm.level}
                      onChange={(e) =>
                        setSkillForm({ ...skillForm, level: parseInt(e.target.value) })
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="number"
                      placeholder="Order Index"
                      value={skillForm.order_index}
                      onChange={(e) =>
                        setSkillForm({ ...skillForm, order_index: parseInt(e.target.value) })
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    Save Skill
                  </button>
                </form>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
                >
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {skill.category} - {skill.level}%
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editSkill(skill)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setShowProjectForm(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Project
              </button>
            </div>

            {showProjectForm && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {editingProject ? 'Edit Project' : 'Add New Project'}
                  </h3>
                  <button
                    onClick={resetProjectForm}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Project Title"
                    required
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <textarea
                    placeholder="Short Description"
                    required
                    rows={2}
                    value={projectForm.description}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <textarea
                    placeholder="Detailed Description"
                    rows={4}
                    value={projectForm.detailed_description}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, detailed_description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Technologies (comma-separated)"
                    value={
                      Array.isArray(projectForm.technologies)
                        ? projectForm.technologies.join(', ')
                        : projectForm.technologies
                    }
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, technologies: e.target.value as never })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={projectForm.image_url}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, image_url: e.target.value })
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="GitHub URL"
                      value={projectForm.github_url}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, github_url: e.target.value })
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Demo URL"
                      value={projectForm.demo_url}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, demo_url: e.target.value })
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <input
                      type="number"
                      placeholder="Order Index"
                      value={projectForm.order_index}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, order_index: parseInt(e.target.value) })
                      }
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={projectForm.featured}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, featured: e.target.checked })
                      }
                      className="w-4 h-4"
                    />
                    Featured Project
                  </label>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    Save Project
                  </button>
                </form>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
                >
                  {project.featured && (
                    <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded mb-2">
                      Featured
                    </span>
                  )}
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editProject(project)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}