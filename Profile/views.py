from django.shortcuts import render

def home(request):
    context = {}
    about = {}
    about['title'] = "Software and cathedrals are much the same – first we build them, then we pray."
    about['paragraph'] = 'I love solving problems and how time seems to slow down and everything else melts away when i am locked into a specific problem. I like to call this period "The flow"'
    about['image'] = "about/intro.jpg"
    about['story'] = """
        <p>I have more than three years of experience as a full stack developer and most recently as a
            native cross-platform app developer. So far i have successful launched projects to production using programming
            languages like Python, JavaScript, Dart, Ruby on Rails with frameworks like Django, React, React-native,
            Flutter, Shopify's Liquid etc.</p>
        <p>I believe that the ability to continously test the boundaries of my knowledge and skills as a developer is paramount to
            improving what i am able to offer my employers. That's why i religiously cultivate the habit of personally
            buying and consuming courses online to learn the latest and best technologies out there, taking on
            projects that require me to learn and pick up new skills on the go!</p>
        <p>So far in my career as a developer, every i have worked with and for knows me as someone who isn't afraid to take on any
            task, regardless of the complexity and still get the job done. I have a background in Mechanical
            Engineering which accounts for my logical aproach to challenges, I am great at breaking down
            complex situations into smaller manageable components, It is what has consistently helped improve the quality of apps i develop, increase my
            efficiency and significantly improve the productivity of my employers.</p>
        <p>I love software development and all that it comes with. It's something that i would do even if i wasn't
            getting paid to do it</p>
    """
    experiences = [
        {
            'organisation' : 'Elite Digital', 
            'specialization' : "Full Stack Developer", 
            'start': 2019, 
            'end': None,
            'present': True
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