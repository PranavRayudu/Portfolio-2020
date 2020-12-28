---
title: UT Automatic Course Notifier
date: 2021-10-20
thumbnail: ut-course-monitor-mockup.png
super: true
subtitle: Course schedule bot to monitor, notify, and register for courses automatically.
link:
    text: Visit Github
    url: https://github.com/PranavRayudu/Course-Change-Notifier
---
Created general framework for a course monitor bot that can monitor courses and notify user of any changes. 
Backend bot written using Selenium, Flask, and Postgresql. Notifications can be configured via multiple channels, including Slack.

Frontend dashboard written using React, Redux, and Ant design. Password protected for security.

Courses and running jobs can be persistently stored in DB and resumed after restart. Configured for fully automated deployment onto Heroku. 
