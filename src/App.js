import React, { useState } from 'react';
import { BookOpen, Users, FileText, Archive, Menu, X, ChevronDown, Calendar, Mail, Phone, MapPin, Award, Target, Eye } from 'lucide-react';
import IcacitAbout from './pages/IcacitAbout';
import IcacitCommittee from './pages/IcacitCommittee';
import IcacitDeadlines from './pages/IcacitDeadlines';
import Icacit2025 from './pages/Icacit2025';

const JournalWebsite = () => {
  const [activePage, setActivePage] = useState('icacit-2025');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [icacitDropdownOpen, setIcacitDropdownOpen] = useState(false);
  const [icacitMobileOpen, setIcacitMobileOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [expandedMember, setExpandedMember] = useState(null);
  const darkMode = true;

  const navItems = [
    { id: 'icacit', label: 'ICACIT 2025', icon: Award },
    { id: 'about', label: 'About Journal', icon: BookOpen },
    { id: 'board', label: 'Editorial Board', icon: Users },
    { id: 'procedure', label: 'Publication Procedure', icon: FileText },
    { id: 'issues', label: 'Issues', icon: Archive }
  ];

  const editorialBoard = [
    { name: 'Dr. Gunathilake Tantirigama', role: 'Chairman, NIBM, Sri Lanka', institution: 'Harvard University', specialty: 'Molecular Biology', email: 's.mitchell@journal.com', image: '👩‍🔬', bio: 'Leading researcher with 20+ years of experience in molecular biology and genetics. Published over 150 papers in top-tier journals.' },
    { name: 'Dr. D. M. A. Kulasooriya', role: 'Associate Editor', institution: 'Stanford University', specialty: 'Computational Biology', email: 'j.chen@journal.com', image: '👨‍💼', bio: 'Expert in computational methods and bioinformatics. Pioneer in machine learning applications for biological research.' },
    { name: 'Dr. Gangani Wickramasinghe', role: 'Associate Editor', institution: 'MIT', specialty: 'Biochemistry', email: 'm.rodriguez@journal.com', image: '👩‍⚕️', bio: 'Specialized in protein structure and function. Award-winning researcher with groundbreaking discoveries in enzyme mechanisms.' },
    { name: 'Dr. Thisara Weerasinghe', role: 'Section Editor', institution: 'Oxford University', specialty: 'Genetics', email: 'a.hassan@journal.com', image: '👨‍🔬', bio: 'Leading geneticist focused on hereditary diseases and gene therapy. Collaborator on multiple international research projects.' },
    { name: 'Dr. Rushan Abeygunawardana', role: 'Section Editor', institution: 'Cambridge University', specialty: 'Cell Biology', email: 'e.thompson@journal.com', image: '👩‍🏫', bio: 'Expert in cellular mechanisms and stem cell research. Recipient of multiple prestigious awards in biological sciences.' },
    { name: 'Ms. Amila De Silva', role: 'Review Editor', institution: 'UC Berkeley', specialty: 'Microbiology', email: 'r.patel@journal.com', image: '👨‍⚕️', bio: 'Microbiologist with extensive experience in infectious diseases and antimicrobial resistance research.' }
  ];

  const publicationSteps = [
    { step: 1, title: 'Manuscript Submission', description: 'Submit your manuscript through our online portal with all required documents', duration: '1 day', details: ['Create an account on our submission portal', 'Upload manuscript in PDF/Word format', 'Provide cover letter and suggested reviewers', 'Pay submission fee (if applicable)'] },
    { step: 2, title: 'Initial Screening', description: 'Editorial team reviews for scope, quality, and formatting compliance', duration: '3-5 days', details: ['Plagiarism check using iThenticate', 'Format and guideline compliance check', 'Scope alignment verification', 'Preliminary quality assessment'] },
    { step: 3, title: 'Peer Review', description: 'Expert reviewers evaluate scientific merit and methodology', duration: '4-6 weeks', details: ['Assignment to 2-3 expert reviewers', 'Double-blind peer review process', 'Comprehensive evaluation of methods and results', 'Feedback compilation'] },
    { step: 4, title: 'Author Revision', description: 'Authors address reviewer comments and revise manuscript', duration: '2-4 weeks', details: ['Receive detailed reviewer feedback', 'Revise manuscript accordingly', 'Prepare point-by-point response', 'Resubmit revised version'] },
    { step: 5, title: 'Final Decision', description: 'Editorial board makes final acceptance decision', duration: '1-2 weeks', details: ['Review of revised manuscript', 'Verification of reviewer concerns addressed', 'Final quality check', 'Accept, minor revision, or reject decision'] },
    { step: 6, title: 'Production & Publication', description: 'Copyediting, typesetting, and online publication', duration: '2-3 weeks', details: ['Professional copyediting', 'Typesetting and layout design', 'Author proof review', 'DOI assignment and online publication'] }
  ];

  const journalIssues = [
    {
      year: 2026,
      volume: 17,
      issue: 1,
      month: 'October',
      articles: 40,
      coverImage: '📘',
      featured: 'Finalized Journal',
      pdfPath: '/pdfs/Finalized_journal_17102026.pdf'
    }
  ];

  const IcacitPage = () => (
    <div className="animate-fadeIn">
      {/* IcacitPage content removed — use the dedicated ICACIT 2025 page instead */}
      <div />
    </div>
  );
      

  const AboutPage = () => (
    <div className="space-y-12 animate-fadeIn">
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-10"></div>
  <div className="relative z-10">
    <h1 className="text-5xl font-bold mb-4">International Journal of Advanced Computing and Information Technology</h1>
    <h2 className="text-2xl font-semibold mb-4">(ICACIT)</h2>
    <p className="text-xl opacity-90 max-w-3xl">The flagship publication of the School of Computing and Engineering (SOCE), National Institute of Business Management (NIBM), Sri Lanka</p>
    <div className="flex gap-4 mt-8">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4"><div className="text-2xl font-bold">Open Access</div><div className="text-sm opacity-90">Free Publication</div></div>
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4"><div className="text-2xl font-bold">Double-Blind</div><div className="text-sm opacity-90">Peer Review</div></div>
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4"><div className="text-2xl font-bold">International</div><div className="text-sm opacity-90">Open to All</div></div>
    </div>
  </div>
</div>

      <div className="grid md:grid-cols-3 gap-6">
  <div className={`${darkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800' : 'bg-gradient-to-br from-blue-50 to-blue-100'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
    <Target className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Our Mission</h3>
    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>To provide a premier platform for academics, students, and professionals to share innovative research and advance knowledge in computing and information technology.</p>
  </div>
  <div className={`${darkMode ? 'bg-gradient-to-br from-purple-900 to-purple-800' : 'bg-gradient-to-br from-purple-50 to-purple-100'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
    <Eye className="w-12 h-12 text-purple-600 mb-4" />
    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Our Vision</h3>
    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>To become a leading open-access journal recognized globally for excellence in computing research and ethical publishing practices.</p>
  </div>
  <div className={`${darkMode ? 'bg-gradient-to-br from-pink-900 to-pink-800' : 'bg-gradient-to-br from-pink-50 to-pink-100'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
    <Award className="w-12 h-12 text-pink-600 mb-4" />
    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Open Access</h3>
    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Free to publish and read. Open to academics, postgraduate students, undergraduate students, and professionals locally and internationally.</p>
  </div>
</div>

<div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
  <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>About ICACIT</h2>
  <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
    INTERNATIONAL JOURNAL OF ADVANCED COMPUTING AND INFORMATION TECHNOLOGY (ICACIT) is the flagship publication of the School of Computing and Engineering (SOCE), National Institute of Business Management (NIBM), Sri Lanka. It is an open-access, double-blind, peer reviewed journal published online and in print.
  </p>
  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
    Publication in the journal is open to academics, postgraduate students, undergraduate students, and professionals both locally and internationally. We are committed to advancing knowledge in computing and information technology through rigorous peer-reviewed research.
  </p>
</div>

      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
  <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Scope & Focus Areas</h2>
  <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>ICACIT publishes research aligned with the conference tracks of ICACIT 2025:</p>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="space-y-3">
      <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'} flex items-center gap-2`}><div className="w-2 h-2 bg-blue-600 rounded-full"></div>Software Engineering</h4>
      <ul className={`ml-6 space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <li>• Software Development Methodologies</li>
        <li>• Software Architecture & Design</li>
        <li>• Software Testing & Quality Assurance</li>
        <li>• DevOps & Agile Practices</li>
      </ul>
    </div>
    <div className="space-y-3">
      <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'} flex items-center gap-2`}><div className="w-2 h-2 bg-purple-600 rounded-full"></div>IT for Business</h4>
      <ul className={`ml-6 space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <li>• Business Intelligence</li>
        <li>• Enterprise Systems</li>
        <li>• Digital Transformation</li>
        <li>• IT Management & Strategy</li>
      </ul>
    </div>
    <div className="space-y-3">
      <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'} flex items-center gap-2`}><div className="w-2 h-2 bg-pink-600 rounded-full"></div>Ethical Hacking & Network Security</h4>
      <ul className={`ml-6 space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <li>• Cybersecurity & Threat Analysis</li>
        <li>• Network Defense Strategies</li>
        <li>• Penetration Testing</li>
        <li>• Security Architecture</li>
      </ul>
    </div>
  </div>
  <div className="mt-6 pt-6 border-t border-gray-200">
    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      For more information about ICACIT 2025, visit: 
      <a href="https://www.nibm.lk/blog/icacit-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 ml-1 underline">
        www.nibm.lk/blog/icacit-2025
      </a>
    </p>
  </div>
</div>

      <div className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-gray-50 to-gray-100'} rounded-2xl p-8`}>
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3"><Mail className="w-6 h-6 text-blue-600 mt-1" /><div><div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email</div><div className={darkMode ? 'text-gray-400' : 'text-gray-600'}></div><div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>programes@nibm.lk</div></div></div>
          <div className="flex items-start gap-3"><Phone className="w-6 h-6 text-blue-600 mt-1" /><div><div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Phone</div><div className={darkMode ? 'text-gray-400' : 'text-gray-600'}></div><div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+94 117 321 000</div></div></div>
          <div className="flex items-start gap-3"><MapPin className="w-6 h-6 text-blue-600 mt-1" /><div><div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Address</div><div className={darkMode ? 'text-gray-400' : 'text-gray-600'}></div><div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No: 120/5,
Wijerama (Vidya) Mawatha,
Colombo 07, Sri Lanka.</div></div></div>
        </div>
      </div>
    </div>
  );

  const BoardPage = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Editorial Board</h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>Meet our distinguished team of editors committed to maintaining the highest standards of scientific excellence</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {editorialBoard.map((member, index) => (
          <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 text-center">
              <div className="text-6xl mb-3">{member.image}</div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-blue-100 font-medium">{member.role}</p>
            </div>
            <div className="p-6">
              <div className="space-y-2 mb-4">
                <p className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{member.institution}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{member.specialty}</p>
                <p className="text-blue-600 text-sm flex items-center gap-2"><Mail className="w-4 h-4" />{member.email}</p>
              </div>
              <button onClick={() => setExpandedMember(expandedMember === index ? null : index)} className={`w-full ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-200' : 'bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-gray-700'} font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                {expandedMember === index ? 'Hide Bio' : 'View Bio'}
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedMember === index ? 'rotate-180' : ''}`} />
              </button>
              {expandedMember === index && (<div className={`mt-4 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fadeIn`}>{member.bio}</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProcedurePage = () => (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Publication Procedure</h1>
        <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>A transparent, efficient peer-review process designed to ensure quality and integrity</p>
      </div>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
        <div className="space-y-8">
          {publicationSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="md:ml-20">
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300`}>
                  <div className="absolute -left-4 md:left-4 top-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">{step.step}</div>
                  <div className="ml-16 md:ml-0">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{step.title}</h3>
                      <span className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-blue-300' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700'} px-4 py-1 rounded-full text-sm font-semibold`}><Calendar className="w-4 h-4 inline mr-1" />{step.duration}</span>
                    </div>
                    <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                    <div className={`${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-50 to-gray-100'} rounded-xl p-4`}>
                      <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Key Activities:</h4>
                      <ul className="space-y-2">{step.details.map((detail, idx) => (<li key={idx} className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-start gap-2`}><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div><span>{detail}</span></li>))}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Average Publication Timeline</h3>
        <p className="text-4xl font-bold mb-2">12-18 Weeks</p>
        <p className="text-blue-100">From submission to online publication</p>
      </div>
    </div>
  );

  const IssuesPage = () => {
    const issue = journalIssues[0];
    const pdfUrl = issue.pdfPath || '/pdfs/Finalized_journal_17102026.pdf';

    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journal Issue</h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{issue.month} {issue.year} — Volume {issue.volume}, Issue {issue.issue}</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-4`}> 
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 flex flex-col gap-4 items-center">
              <div className="text-6xl">{issue.coverImage}</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{issue.featured}</div>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold">Open PDF</a>
              <a href={pdfUrl} download className="w-full inline-block text-center border border-gray-600 px-4 py-2 rounded-lg text-sm">Download PDF</a>
            </div>
            <div className="md:flex-1">
              <div className="w-full h-[600px] md:h-[800px] bg-black rounded-lg overflow-hidden">
                <iframe title="Journal PDF" src={pdfUrl} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'}`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"><BookOpen className="w-7 h-7 text-white" /></div>
              <div>
<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ICACIT 2025</h1>
<p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>NIBM, Sri Lanka</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-2 items-center">
              <div className="relative">
                <button onClick={() => setIcacitDropdownOpen(!icacitDropdownOpen)} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activePage.startsWith('icacit') ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-gray-300 hover:bg-gray-700'}`}><Award className="w-5 h-5" />ICACIT 2025 <ChevronDown className={`w-4 h-4 ${icacitDropdownOpen ? 'rotate-180' : ''}`} /></button>
                {icacitDropdownOpen && (
                  <div className={`absolute mt-2 right-0 w-56 rounded-lg shadow-lg z-50 ${darkMode ? 'bg-gray-800 text-gray-100 divide-y divide-gray-700' : 'bg-white text-gray-800 divide-y divide-gray-200'}`}>
                    <button onClick={() => { setActivePage('icacit-2025'); setIcacitDropdownOpen(false); }} className={`w-full text-left px-4 py-3 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}>ICACIT 2025 Page</button>
                    <button onClick={() => { setActivePage('icacit-about'); setIcacitDropdownOpen(false); }} className={`w-full text-left px-4 py-3 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}>About Conference</button>
                    <button onClick={() => { setActivePage('icacit-committee'); setIcacitDropdownOpen(false); }} className={`w-full text-left px-4 py-3 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}>Organizing Committee</button>
                    <button onClick={() => { setActivePage('icacit-deadlines'); setIcacitDropdownOpen(false); }} className={`w-full text-left px-4 py-3 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}>Deadlines</button>
                  </div>
                )}
              </div>

              {/* About Journal dropdown */}
              <div className="relative about-dropdown">
                <button onClick={() => { setAboutDropdownOpen(!aboutDropdownOpen); }} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activePage === 'about' || activePage === 'board' || activePage === 'procedure' || activePage === 'issues' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : darkMode ? 'text-gray-200 bg-gray-700 hover:bg-gray-600' : 'text-gray-700 bg-white hover:bg-gray-100'}`}><BookOpen className="w-5 h-5" />About Journal <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} /></button>
                {aboutDropdownOpen && (
                  <div className={`absolute mt-2 right-0 w-56 rounded-lg shadow-lg z-50 ${darkMode ? 'bg-gray-800 text-gray-100 divide-y divide-gray-700' : 'bg-white text-gray-800 divide-y divide-gray-200'}`}>
                    <button onClick={() => { setActivePage('about'); setAboutDropdownOpen(false); }} className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>About Journal</button>
                    <button onClick={() => { setActivePage('board'); setAboutDropdownOpen(false); }} className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Editorial Board</button>
                    <button onClick={() => { setActivePage('procedure'); setAboutDropdownOpen(false); }} className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Publication Procedure</button>
                    <button onClick={() => { setActivePage('issues'); setAboutDropdownOpen(false); }} className={`w-full text-left px-4 py-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>Issues</button>
                  </div>
                )}
              </div>
              {/* end About Journal dropdown */}

              {/* Dark mode enforced: toggle removed */}
            </nav>
            <div className="flex items-center gap-2 md:hidden">
              {/* Dark mode enforced: toggle removed */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <div>
                <button onClick={() => setIcacitMobileOpen(!icacitMobileOpen)} className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl font-medium transition-all ${icacitMobileOpen ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><div className="flex items-center gap-2"><Award className="w-5 h-5" />ICACIT</div><ChevronDown className={`w-4 h-4 transition-transform ${icacitMobileOpen ? 'rotate-180' : ''}`} /></button>
                {icacitMobileOpen && (
                  <div className="space-y-2 px-2 mt-2">
                    <button onClick={() => { setActivePage('icacit-2025'); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 rounded-lg ${activePage === 'icacit-2025' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>ICACIT 2025 Page</button>
                    <button onClick={() => { setActivePage('icacit-about'); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 rounded-lg ${activePage === 'icacit-about' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>About Conference</button>
                    <button onClick={() => { setActivePage('icacit-committee'); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 rounded-lg ${activePage === 'icacit-committee' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Organizing Committee</button>
                    <button onClick={() => { setActivePage('icacit-deadlines'); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 rounded-lg ${activePage === 'icacit-deadlines' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Deadlines</button>
                  </div>
                )}
              </div>
                {/* About Journal mobile submenu */}
                <button onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${activePage === 'about' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}><BookOpen className="w-5 h-5" />About Journal</button>
                <button onClick={() => { setActivePage('board'); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${activePage === 'board' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}><Users className="w-5 h-5" />Editorial Board</button>
                <button onClick={() => { setActivePage('procedure'); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${activePage === 'procedure' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}><FileText className="w-5 h-5" />Publication Procedure</button>
                <button onClick={() => { setActivePage('issues'); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${activePage === 'issues' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}><Archive className="w-5 h-5" />Issues</button>
                {/* end About Journal mobile submenu */}
                {navItems.filter(n => n.id !== 'icacit').map((item) => {const Icon = item.icon; return (<button key={item.id} onClick={() => {setActivePage(item.id); setMobileMenuOpen(false);}} className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${activePage === item.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}><Icon className="w-5 h-5" />{item.label}</button>);})}
            </nav>
          )}
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {activePage === 'icacit' && <IcacitPage />}
      {activePage === 'icacit-2025' && <Icacit2025 darkMode={darkMode} />}
  {activePage === 'icacit-about' && <IcacitAbout darkMode={darkMode} />}
  {activePage === 'icacit-committee' && <IcacitCommittee darkMode={darkMode} />}
  {activePage === 'icacit-deadlines' && <IcacitDeadlines darkMode={darkMode} />}
  {activePage === 'about' && <AboutPage />}
        {activePage === 'board' && <BoardPage />}
        {activePage === 'procedure' && <ProcedurePage />}
        {activePage === 'issues' && <IssuesPage />}
      </main>
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h3 className="text-xl font-bold mb-4">About IJSR</h3><p className="text-gray-400 text-sm">International Journal of Scientific Research is committed to advancing knowledge through rigorous peer-reviewed publications.</p></div>
            <div><h3 className="text-xl font-bold mb-4">Quick Links</h3><ul className="space-y-2 text-sm text-gray-400"><li><button onClick={() => {}} className="hover:text-white transition-colors">Author Guidelines</button></li><li><button onClick={() => {}} className="hover:text-white transition-colors">Reviewer Guidelines</button></li><li><button onClick={() => {}} className="hover:text-white transition-colors">Ethics & Policies</button></li><li><button onClick={() => {}} className="hover:text-white transition-colors">Open Access</button></li></ul></div>
            <div><h3 className="text-xl font-bold mb-4">Stay Connected</h3><p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates</p><div className="flex gap-2"><input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" /><button className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">Subscribe</button></div></div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400"><p>&copy; 2025 International Journal of Scientific Research. All rights reserved.</p><p className="mt-2">ISSN: 2456-7891 (Online) | Impact Factor: 4.85</p></div>
        </div>
      </footer>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn{animation:fadeIn 0.6s ease-out}`}</style>
    </div>
  );
};

export default JournalWebsite;