import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillItem {
  name: string;
  icon: string;
  url: string;
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  website: string;
  points: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Qasim Ali | Power Platform Consultant';
  email = 'qasim.railo@gmail.com';
  phone = '+974 7400 1784';
  location = 'Doha, Qatar';
  profile = {
    name: 'Qasim Ali',
    role: 'Power Platform & Dynamics 365 Customer Engagement (CE) Consultant',
    photo: 'assets/Qasim-Ali-Photo.jpg'
  };

  summary = 'Power Platform and Dynamics 365 CE Consultant with 5+ years of experience delivering scalable CRM solutions using Power Apps, Power Automate, Power BI, Dataverse, and SharePoint, supported by strong Angular and ASP.NET Core Web API development.';

  skillGroups: SkillGroup[] = [
    {
      title: 'Power Platform & Dynamics 365',
      items: [
        { name: 'Power Apps', icon: 'https://learn.microsoft.com/media/logos/logo_powerapps.svg', url: 'https://learn.microsoft.com/en-us/power-apps/' },
        { name: 'Power Automate', icon: 'https://learn.microsoft.com/media/logos/logo_powerautomate.svg', url: 'https://learn.microsoft.com/en-us/power-automate/' },
        { name: 'Power BI', icon: 'https://learn.microsoft.com/media/logos/logo_powerbi.svg', url: 'https://powerbi.microsoft.com/' },
        { name: 'Power Pages', icon: 'https://learn.microsoft.com/media/logos/logo_powerapps.svg', url: 'https://learn.microsoft.com/en-us/power-pages/' },
        { name: 'Dataverse', icon: 'https://learn.microsoft.com/media/logos/logo_microsoft.svg', url: 'https://learn.microsoft.com/en-us/power-apps/maker/data-platform/' },
        { name: 'SharePoint Online', icon: 'https://learn.microsoft.com/media/logos/logo_sharepoint.svg', url: 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/' },
        { name: 'Copilot', icon: 'https://learn.microsoft.com/media/logos/logo_microsoft.svg', url: 'https://www.microsoft.com/en-us/microsoft-copilot/' },
        { name: 'Customer Engagement', icon: 'https://learn.microsoft.com/media/logos/logo_dynamics365.svg', url: 'https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/' }
      ]
    },
    {
      title: 'Backend (.NET)',
      items: [
        { name: 'ASP.NET Core', icon: 'https://cdn.simpleicons.org/dotnet', url: 'https://dotnet.microsoft.com/apps/aspnet' },
        { name: 'C#', icon: 'https://cdn.simpleicons.org/csharp', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { name: 'RESTful APIs', icon: 'https://cdn.simpleicons.org/openapiinitiative', url: 'https://swagger.io/resources/open-api/' },
        { name: 'Entity Framework Core', icon: 'https://cdn.simpleicons.org/dotnet', url: 'https://learn.microsoft.com/en-us/ef/core/' },
        { name: 'LINQ', icon: 'https://cdn.simpleicons.org/dotnet', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/' },
        { name: 'JWT Authentication', icon: 'https://cdn.simpleicons.org/jsonwebtokens', url: 'https://jwt.io/' },
        { name: 'Dependency Injection', icon: 'https://cdn.simpleicons.org/dotnet', url: 'https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection' }
      ]
    },
    {
      title: 'Frontend',
      items: [
        { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular', url: 'https://angular.io/' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', url: 'https://www.typescriptlang.org/' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter', url: 'https://flutter.dev/' },
        { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
        { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap', url: 'https://getbootstrap.com/' },
        { name: 'Angular Material', icon: 'https://cdn.simpleicons.org/angular', url: 'https://material.angular.io/' }
      ]
    },
    {
      title: 'Databases & Tools',
      items: [
        { name: 'SQL Server', icon: 'https://cdn.simpleicons.org/microsoftsqlserver', url: 'https://www.microsoft.com/en-us/sql-server/' },
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql', url: 'https://www.mysql.com/' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', url: 'https://git-scm.com/' },
        { name: 'Swagger', icon: 'https://cdn.simpleicons.org/swagger', url: 'https://swagger.io/' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', url: 'https://www.postman.com/' },
        { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira', url: 'https://www.atlassian.com/software/jira' },
        { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode', url: 'https://code.visualstudio.com/' },
        { name: 'Agile / Scrum', icon: 'https://cdn.simpleicons.org/atlassian', url: 'https://www.atlassian.com/agile/scrum' }
      ]
    }
  ];

  experience: ExperienceItem[] = [
    {
      role: 'Business Applications Consultant',
      company: 'Le Petit Farmers & Agricultural Services W.L.L',
      period: 'April 2026 – Present',
      location: 'Doha, Qatar',
      website: 'https://www.lpflife.com',
      points: [
        'Lead requirements gathering and solution design for a unified business platform covering orders, services, vendors, and operations.',
        'Act as the primary link between business stakeholders and the development team to ensure clear requirements and correct implementation.',
        'Provide technical consultation during development using Vue.js, FastAPI, and PostgreSQL, and guide system workflow decisions.',
        'Oversee testing, UAT, and delivery validation to ensure business-aligned and scalable system implementation.'
      ]
    },
    {
      role: 'Business Systems Specialist',
      company: 'AJK Delivery W.L.L',
      period: 'March 2025 – March 2026',
      location: 'Doha, Qatar',
      website: 'https://www.ajkdelivery.com',
      points: [
        'Developed and managed internal business systems using SharePoint Lists, Power Apps, and dashboards for daily operations and reporting.',
        'Created workflow automations using Power Automate for approvals, notifications, and simple task tracking.',
        'Set up and maintained SharePoint structure for onboarding, documentation, and access management across teams and partners.',
        'Organized operational data to support reporting and decision-making for business activities and service operations.'
      ]
    },
    {
      role: 'Dynamics 365 CRM CE Technical Consultant',
      company: 'Proptiv Pvt Ltd',
      period: 'February 2024 – December 2024',
      location: 'Islamabad, Pakistan',
      website: 'https://www.proptiv.com/',
      points: [
        'Designed and customized Model-Driven Apps in Dynamics 365 CE to manage end-to-end real estate workflows including leads, sales, rentals, and revenue tracking.',
        'Configured and extended Dataverse tables, relationships, business rules, and role-based security to enable scalable enterprise solutions.',
        'Automated CRM workflows using Dynamics 365 CE and Power Automate for approvals, notifications, and external integrations.',
        'Integrated SharePoint with Dynamics 365 CE for centralized document management, metadata tagging, version control, and compliance support.'
      ]
    },
    {
      role: 'Power Platform Developer',
      company: 'Infiniun Healthcare Pvt Ltd',
      period: 'May 2023 – February 2024',
      location: 'Islamabad, Pakistan',
      website: 'http://www.infiniun.com/',
      points: [
        'Supported Power Apps–based business forms and data capture screens under senior developer guidance.',
        'Assisted in configuring Power Automate flows for notifications, approvals, and simple automation.',
        'Helped structure data entities and access rules aligned with Microsoft Dataverse fundamentals.',
        'Supported reporting requirements using Power BI dashboards.'
      ]
    },
    {
      role: 'Web Application Developer',
      company: 'Mechplan Pvt Ltd',
      period: 'January 2021 – April 2023',
      location: 'Islamabad, Pakistan',
      website: 'https://mechplan.com/',
      points: [
        'Developed and maintained full-stack web applications using Angular and ASP.NET Core.',
        'Designed and optimized SQL Server schemas using Entity Framework Core for efficient data handling and maintainability.',
        'Built scalable RESTful APIs in .NET Core with validation, centralized error handling, and JWT-based authentication.',
        'Implemented role-based access controls using ASP.NET Core Identity to safeguard sensitive modules and enforce business policies.'
      ]
    },
    {
      role: 'WordPress Developer',
      company: 'Unique Professional Web Associates Pvt Ltd',
      period: 'January 2020 – January 2021',
      location: 'Islamabad, Pakistan',
      website: 'https://uniqueproweb.com',
      points: [
        'Designed and developed responsive websites using WordPress, PHP, and MySQL.',
        'Implemented website security best practices including SSL, secure login, backups, and role management.',
        'Built corporate recruitment portals and e-commerce jewelry stores with dynamic client content.',
        'Focused on performance optimization and secure, maintainable web experiences.'
      ]
    }
  ];

  education = [
    'Master of Computer Science – COMSATS University Islamabad (2017 – 2019)',
    'Degree (Master of Computer Science) – COMSATS University Islamabad',
    'English, Urdu'
  ];

  certifications = [
    'Foundational C# with Microsoft – freeCodeCamp (2025)',
    'JavaScript Algorithms and Data Structures – freeCodeCamp (2023)',
    'WordPress Development – DigiSkills (2019) | ID: TYSNZUZPQ',
    'E-Rozgaar Technical Skills Training for Web Development – COMSATS (2019)'
  ];

  languages = [
    'English – Professional Working Proficiency',
    'Urdu – Native or Bilingual Proficiency',
    'Eligible to work: All GCC'
  ];
}
