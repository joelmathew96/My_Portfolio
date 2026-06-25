import { useReveal } from '../hooks/useReveal'
import { FaBuilding } from 'react-icons/fa'
import ProjectGallery from '../components/ProjectGallery'
import './Internship.css'

const internships = [
    {
        company: 'Imagine AI Sdn Bhd',
        role: 'AI Developer Intern',
        period: 'Jul 2025 – Nov 2025',
        location: 'Johor Bahru, Malaysia',
        description:
            'Developed AI web applications by using Python, React.js, Next.js, HTML, CSS, JavaScript & MongoDb ',
        contributions: [
            'Full-Stack Desktop Engineering: Developed offline-capable backend and frontend solutions using C# .NET 6.0 (WinForms) for high-precision inspection software.',
            'Industrial Defect Detection: Supported the development of automated machine-part inspection models through robust data annotation and performance testing.',
            'Computer Vision Prototype: Engineered a real-time American Sign Language (ASL) detection system using Python and OpenCV.',
            'System Maintenance: Debugged and optimized core C# software modules to ensure reliability in localized client environments.',
        ],
        tech: ['Next.js', 'React.js', 'Python', 'HTML5', 'CSS', 'JavaScript', 'MongoDb'],
    },
]

export default function Internship() {
    const ref = useReveal()

    return (
        <main ref={ref} className="internship-page">
            {/* Page Header */}
            <section className="page-hero dot-bg">
                <div className="orb orb--page" />
                <div className="orb orb--page-left" />
                <div className="container page-hero__content">
                    <div className="section-tag animate-fadeUp">Career Journey</div>
                    <h1 className="page-hero__title animate-fadeUp" style={{ animationDelay: '0.1s' }}>
                        Internship Experience
                    </h1>
                    <p className="page-hero__sub animate-fadeUp" style={{ animationDelay: '0.2s' }}>
                        A timeline of my internship roles, the teams I joined, and what I built along the way.
                    </p>
                </div>
            </section>

            {/* ROLE OVERVIEW */}
            <section className="section">
                <div className="container">
                    <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Previous Internship</div>
                            <h2 className="exp-role-name">Imagine AI Sdn Bhd</h2>
                            <p className="exp-role-title">AI Developer Intern · Jul 2025 – Nov 2025</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>
                                    Developed AI Chatbot System which is called AI Powered Studdy Buddy System which can help students to answer quiz questions and provide some guidance to students on how to adapt a unique learning style.
                                </p>
                                <p>
                                    Developed Task Tracker System which can help to track and monitor the tasks done by the employees.
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['React.js', 'Python', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'MongoDb'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <br></br>

                    <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Previous Internship</div>
                            <h2 className="exp-role-name">Sim IT Sdn Bhd</h2>
                            <p className="exp-role-title">Web Developer Intern · Apr 2024 – Jun 2024</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>
                                 Developed Simple App Generator by using React.js, Next.js, Node.js, HTML5, CSS3, JavaScript, and MySQL.
                                </p>
                                <p>
                                 Developed Tutor App by using React.js, Next.js, Node.js, HTML5, CSS3, JavaScript,and MySQL.
                                </p>
                                 <p>
                                  Integrated REST API into Tutor App by using Quarkus (Java backend framework)
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['React.js', 'Node.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                     <br></br>

                    <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Previous Internship</div>
                            <h2 className="exp-role-name">Intelligent Mental Arithmetic Sdn Bhd</h2>
                            <p className="exp-role-title">Software Developer Intern · Jul 2024 – Oct 2024</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>
                                    Developed IntelHost CMS system using Laravel, PHP, HTML5, CSS3, JavaScript,and MySQL.
                                </p>
                                <p>
                                   Developed IntelHost Smart Admin System by using Laravel, PHP, HTML5, CSS3,JavaScript, and MySQL.
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['Laravel', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                     <br></br>

                    <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Previous Internship</div>
                            <h2 className="exp-role-name">Hery Intelligent Technology Sdn Bhd</h2>
                            <p className="exp-role-title">Web Developer Intern · Oct 2024 – Mar 2025</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>                                   
                                  Developed Property Accounting  System by using PHP, HTML5, CSS,  JavaScript, 
                                 and MySQL.
                                </p>
                                <p>
                                  Developed PPNJ system by using PHP, HTML5, CSS,  JavaScript, and MySQL.
                                </p>
                                <p>                                  
                                Developed Tadika Management System by using PHP, HTML5, CSS,  JavaScript, 
                                and MySQL.
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <br></br>

                       <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Previous Internship</div>
                            <h2 className="exp-role-name">Rank Alpha Technologies Sdn Bhd</h2>
                            <p className="exp-role-title">Web Developer (Contract) · Oct 2023 – Mar 2024</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>                                   
                                 Developed Unify Cargo Care system by using ASP.NET, HTML5, CSS3, JavaScript and SQL Server.
                                </p>
                                <p>
                                 Developed CyberPower Management system by using ASP.NET, HTML5, CSS3,JavaScript and SQL Server.
                                </p>
                                <p>                                  
                                Developed E-Gateway system by using ASP.NET, HTML5, CSS3, JavaScript and SQL Server.
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['ASP.NET', 'HTML5', 'CSS3', 'JavaScript', 'SQL Server'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <br></br>

                    <div className="reveal exp-role-card card">
                        <div className="exp-role-badge"><FaBuilding /></div>
                        <div className="exp-role-info">
                            <div className="section-tag" style={{ marginBottom: '0.4rem' }}>Previous Internship</div>
                            <h2 className="exp-role-name">BCZ IT Solutions Sdn Bhd</h2>
                            <p className="exp-role-title">Web Developer (Intern) · Jul 2018 – Oct 2018</p>
                            <div className="exp-role-desc">
                                <p style={{ marginBottom: '1rem' }}>                                   
                                Developed myKeeSong website by using WordPress, PHP, HTML5, CSS3, JavaScript and MySQL.
                                </p>
                                <p>                                 
                                Developed OKiT 247 website by using WooCommerce, PHP, HTML5, CSS3, JavaScript and MySQL.
                                </p>
                            </div>
                            <div className="exp-role-tags">
                                {['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                  

                        
                    

                    
                </div>
            </section>
        </main>
    )
}
