from django.shortcuts import render

def home(request):
    context = {}
    about = {}
    about['title'] = "Software and cathedrals are much the same – first we build them, then we pray."
    about['paragraph'] = 'I love solving problems and how time seems to slow down and everything else melts away when i am locked into a specific problem. I like to call this period "The flow"'
    about['image'] = "about/intro.jpg"
    about['story'] = """
        <p>I have more than three years of experience as a full stack developer and most recently as a native cross-platform app developer. I have actively contributed to a handful of production projects using programming languages like JavaScript, Python, and Dart with frameworks like React-native, React, Django, Flutter, Shopify's Liquid, etc</p>
        <p>I believe that the ability to continuously test the boundaries of my knowledge and skills as a software engineer is paramount to improving what I can offer my employers. That's why I religiously cultivate the habit of personally consuming courses, and articles online to learn the latest and best technologies out there, and taking on projects that require me to pick up new skills on the go!</p>
        <p>I am not afraid to take on a complex task thanks to a background in Mechanical Engineering which accounts for my logical approach to challenges, I am great at breaking down complex situations into smaller manageable components, It is what has consistently improved the quality of apps I develop, increased my efficiency and significantly improved the productivity of my employers.</p>
        <p>I love software development and all that it comes with, I am more than grateful to be able to do this every day, and I'm excited about what the future holds</p>
    """
    experiences = [
        {
            'organisation' : 'Bunch Studios', 
            'specialization' : "Software Engineer", 
            'start': 2020, 
            'end': None,
            'present': True
        },
        {
            'organisation' : 'Elite Digital', 
            'specialization' : "Full Stack Developer", 
            'start': 2019, 
            'end': 2020,
            'present': False
        },
        {
            'organisation' : 'Bertley Design', 
            'specialization' : "Freelancer", 
            'start': 2019, 
            'end': None,
            'present': True
        },
        {
            'organisation' : 'Advantage Group', 
            'specialization' : "Technical Specialist", 
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
    about['instagram'] = "https://www.instagram.com/bertleydesign/"
    about['email'] = "info@edialu.com"

    context['about'] = about
    return render(request, 'home/index.html', context)