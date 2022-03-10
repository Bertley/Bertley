from django.shortcuts import render


def home(request):
    context = {}
    about = {}
    about['title'] = "Software and cathedrals are much the same – first, we build them, then we pray."
    about['paragraph'] = 'I love solving problems and how time seems to slow down, and everything else melts away when I am locked into a specific issue. I like to call this period "The flow."'
    about['image'] = "about/intro.jpg"
    about['story'] = """
        <p>I am a Technical Lead with over 5 years of experience as a Software Engineer and focus on creating excellent mobile and web applications.</p>
        <p>I have contributed to a handful of production products using the following technologies: React, React Native, NodeJs, Express, Swift, Obj c, TypeScript, JavaScript, Python, Django, GraphQl, SQL, Prisma, Shopify Apps & Themes, Php, Laravel etc. </p>
        <p>I believe that the ability to continuously test the boundaries of my knowledge and skills as a software engineer is paramount to improving what I can offer my employers and my endeavours. That's why I religiously cultivate the habit of personally consuming courses and articles online to learn the latest and best technologies out there and taking on projects that require me to pick up new skills on the go!
I am not afraid to take on complex tasks. I am great at breaking down difficult situations into smaller manageable components; it has consistently improved the quality of applications I design, increased my efficiency and significantly improved the productivity of my employers.</p>
        <p>I love software development and all that it comes with, I am more than grateful to do this every day, and I'm excited about what the future holds.</p>
    """
    experiences = [
        {
            'organisation': 'AgvisorPro',
            'specialization': "Technical Lead",
            'start': 2022,
            'end': None,
            'present': True
        },
        {
            'organisation': 'Shopify Partnet',
            'specialization': "Consultant",
            'start': 2019,
            'end': None,
            'present': True
        },
        {
            'organisation': 'AgvisorPro',
            'specialization': "Full Stack Engineer",
            'start': 2021,
            'end': 2022,
            'present': False
        },
        {
            'organisation': 'Bunch Studios',
            'specialization': "Software Engineer",
            'start': 2020,
            'end': 2021,
            'present': False
        },
        {
            'organisation': 'Elite Digital',
            'specialization': "Full Stack Developer",
            'start': 2019,
            'end': 2020,
            'present': False
        },
        {
            'organisation': 'Advantage Group',
            'specialization': "Technical Specialist",
            'start': 2018,
            'end': 2018,
            'present': False
        }
    ]
    about['experiences'] = experiences

    awards = [
        {
            'award': "Graduate Certificate",
            'program': "Web Development",
            'from': "Humber College",
            'year': 2018
        },
        {
            'award': "B.Eng",
            'program': "Mechanical Engineering",
            'from': "Covenant University",
            'year': 2015
        }
    ]

    about['awards'] = awards

    about['city'] = "Toronto"
    about['province'] = "ON"
    about['country'] = "Canada"
    about['linkedin'] = "https://www.linkedin.com/in/ehinomenidialu/"
    about['github'] = "https://github.com/bertley/"
    about['instagram'] = "https://www.instagram.com/ehisidialu/"
    about['email'] = "info@edialu.com"

    context['about'] = about
    return render(request, 'home/index.html', context)
