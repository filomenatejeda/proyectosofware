// utils/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    // Obtener el idioma preferido desde las cabeceras del navegador o usa 'es' por defecto
    return 'es'; 
  } else {
    return localStorage.getItem('language') || 'es';
  }
};


i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: getInitialLanguage(), // Usa la función para obtener el idioma
    resources: {
      en: {
        translation: {
          home: "Home",
          login: "Login",
          welcome: "Welcome",
          description: "MindTrack is a platform focused on monitoring and improving mental health, focusing on tracking emotions and practicing healthy habits. At MindTrack we offer a safe and accessible space to promote emotional and personal well-being. Our mission is to support you on your path to a more balanced and fulfilling life.",
          footer: "2024 MindTrack. All rights reserved.",
          user: "UserName",
          password: "Password",
          enter: "Enter",
          register: "Register",
          name: "First Name",
          lastname: "Last Name",
          email: "Email",
          haveanaccount:"I already have an account" ,
          begin: "Start now",
          features: "Main Features",
          dailyemotion: "Daily Emotions Log",
          descriptiondailyemotion: "Record your emotions daily, detect patterns and write personal reflections to understand yourself better.",
          exercises: "Relaxation exercises",
          descriptionexercises: "Practice breathing and meditation techniques with reminders to take care of your well-being.",
          habits: "Healthy Habits",
          hhabits: "Habits",
          descriptionhabits: "Create and follow healthy habits that promote your mental and physical well-being.",
          conextion: "Connection with Professionals",
          descriptionconextion: "Connect with psychologists and therapists to get the professional support you need.",
          resourses: "Educational Resources",
          descriptionresourses:"Discover articles, videos and podcasts about mental health and receive personalized recommendations based on your emotional records.",
          articles: "Articles",
          descriptionarticles: "Access a wide variety of articles addressing topics such as anxiety, depression, stress management, and self-compassion techniques.",
          videos: "Educational Videos",
          descriptionvideos: "Watch videos that explain mental health concepts, offer relaxation techniques, and share inspiring testimonials.",
          podcast: "Podcasts",
          descriptionpodcast: "Listen to episodes about emotional well-being, coping strategies, and interviews with mental health experts.",
          resoursesi: "Interactive Resources",
          descriptioniresourses: "Use interactive tools such as quizzes, reflection exercises and self-help guides to improve your well-being.",
          communities: "Support Communities",
          descriptioncommunities: "Connect with support groups where you can share experiences and learn from others facing similar challenges.",
          recommendatios: "Personalized Recommendations",
          descriptionrecommendatios: "Receive suggestions for educational content and exercises based on your emotional records and personal needs.",
          ia: "Artificial Intelligence Module",
          descriptionia: "Our AI system detects emotional patterns and suggests personalized content, such as articles or exercises, based on your needs.",
          odss: "Impact on SDG 3",
          ods: "SDG 3", 
          descriptionods: "MindTrack contributes to SDG 3 by providing an affordable tool to improve mental health and overall well-being.",
          ai: "AI",
          homedescription: "At MindTrack, your wellbeing is our priority. This is a safe place to vent and seek help. Explore our tools and remember, you are not alone; we are here to support you.",
          feeling: "How are you today?",
          days: "Previous Days",
          notes: "Recent Notes",
          gonotes: "Go to Notes",
          professionals: "Professionals",
          techniques: "Relaxation exercises and techniques",
          ttechniques:"Exercises",
          note: "Note",
          hide: "Hide",
          logout: "Log out",
          notess: "Notes",
          calendar:"Calendar",

          //Loading
          loading:"Loading...",

          //Emociones
          veryhappy: "Very Happy",
                happy: "Happy",
                neutral: "Neutral",
                sad: "Sad",
                crying: "Crying",

          //Calendario
          emotions_calendar:"Calendar of Emotions",
          intoemotions_calendar:"Monitor your emotions on a daily basis",
          howdoyoufeel: "How do you feel?",
          statistics_emotions:"Statistics Emotions",
          insufficient_data:"There is insufficient data to show.",

          //Notas
          writethoughts:"Write down your thoughts!",
          intowritethoughts:"Use these notes as a tool to explore your emotions and foster personal growth.",
          iintowritethoughts:"Remember, every word counts in your journey to wellness.",
          wellness_notes: "Wellness Notes",
          new_wellness:"Write a new wellness note here...",
          update_note:"Update Note ",
          add_note:"Add Note",

          //Recursos educativos
          educational_resources:"Educational Resources",
          intoeducational_resources:"A collection of valuable resources to support your emotional and mental well-being. From informative articles to inspirational videos and podcasts, our goal is to provide you with tools and insights to help you better understand your mental health and develop strategies to improve it. Explore the resources available and choose those that resonate with you on your path to a more balanced and fulfilling life.",

          //Articulos
            //Ansiedad
             anxietydisorders:"Anxiety disorders",
                intoanxiety:"This article provides an in-depth look at anxiety disorders, their prevalence and their impact on daily life.",
             definition_anxiety:"Definition and Perception of Anxiety",
                intodefinition_anxiety:"People often label anxiety sufferers with derogatory terms, which can lead to additional suffering. Anxiety is a normal feeling of fear, but it can become pathological when it occurs for no real reason.",
              prevalence:"Prevalence",
                intoprevalence:"Anxiety disorders are common in Mexico, affecting 14.8% of the population, with a higher incidence in women and young people.",
              anxiety_disorders:"Classification of Anxiety Disorders",
                intoanxiety_disorders:"Disorders include generalized anxiety disorder, agoraphobia, panic attacks, and social and specific phobias.",
              etiology:"Etiology and Physiology",
                intoetiology:"Hereditary causes and neurotransmitter dysfunctions are discussed, as well as the function of the autonomic nervous system.",
              daily_life:"Impact on Daily Life",
                intodaily_life:"Anxiety can affect concentration and generate distortions that make daily functioning difficult.",
          specific_types:"Specific Types of Disorders",
            intospecific_types:"Disorders such as agoraphobia and social phobias are described, where people avoid interactions for fear of being evaluated..",
          conclusion:"Conclusion",
            conclusion_anxiety:"It is vital to recognize anxiety disorders as mental health conditions that require attention and treatment.",

            //estres
          stressmanagement:"Stress Management Guide",
          intostressmanagement:"This article provides an in-depth look at stress, its impact on adolescents and its effective management.",
          introduction_stress:"Introduction to Stress",
            intointroduction_stress:"Stress is a normal, physiological reaction of the body that allows us to adapt to difficult or threatening situations. During adolescence, stress can intensify due to physical, psychological and emotional changes.",
          stress_adolescence:"Stress in Adolescence",
            intostress_adolescence:"Hormonal changes and the search for identity can generate tensions that result in adaptive stress, affecting the well-being of young people.",
          stress_recognition:"Stress Recognition",
            intostress_recognition:"It is crucial to identify the elements that contribute to stress and to detect when it becomes maladaptive, which can interfere with daily life.",
          guide_stress:"Who is this guide for?",
            intoguide_stress:"Aimed at educators, family members and anyone interested in the well-being of adolescents and young people, looking for tools to manage stress in school and community settings.",
          objective_stress:"Objective of the Guide",
            intobjective_stress:"This guide seeks to strengthen prevention measures for stressful situations and to promote emotional well-being in schools and communities.",
          conclusion_stress:"Understanding stress and its impact is vital to support young people in their development and promote their well-being.",

          //salud mental
          mental_health:"What is mental health and why is it important?",
            intomental_health:"This article explores the concept of mental health, its relevance in our lives and how it influences overall well-being.",
          what_is_mental:"What is Mental Health?",
           intowhat_is_mental:"Mental health is a state of well-being in which a person is aware of his or her capabilities, can cope with the normal stresses of life, work productively and contribute to his or her community.",
          importance_mental:"Importance of Mental Health",
            intoimportance_mental:"Mental health affects how we think, feel and act at every stage of our lives. Maintaining a balance in this area allows for proper personal, social and emotional development.",
          factors_mental:"Factors Affecting Mental Health",
            intofactors_mental:"There are a number of factors that can influence mental health, including biological factors such as genetics, life experiences such as trauma or abuse, and family history of mental health problems.",
          promotion_mental:"Mental Health Promotion and Care",
            intopromotion_mental:"Taking care of our mental health involves recognizing our emotions, seeking support in times of need and adopting healthy habits, such as meditation, regular exercise and adequate rest time.",
          
            //autestima
          self_esteem:"Practical Guide to Improve Self-Esteem",
            intoself_esteem:"Explore how to improve self-esteem through healthy habits, self-confidence and self-worth.",
          what_self:"What is self-esteem?",
            intowhat_self:"Self-esteem is the perception and valuation that each person has of him/herself, influenced by self-confidence, self-respect and personal satisfaction.",
          importance_self:"Importance of Self-Esteem",
            intoimportance_self:"A healthy self-esteem allows us to face challenges, make confident decisions and have a better relationship with ourselves and others. Strengthening it improves our overall well-being.",
          factors_self:"Factors Influencing Self-Esteem",
            intofactors_self:"Factors such as personal experiences, upbringing, and social environment can influence how a person values himself or herself and perceives his or her own abilities.",
          improve_self:"How to Improve Self-Esteem?",
            intoimprove_self:"Improving self-esteem involves recognizing our strengths, accepting our weaknesses and cultivating positive thoughts. Practices such as gratitude and self-care can be beneficial.",

          read_more:"Read More",

          //Videos

          //relajación
          relaxation_techniques:"Relaxation Techniques",
            intorelaxation_techniques:"In this video, we explore different relaxation techniques that can help you reduce stress and improve your emotional well-being.",
          benefits_relaxation:"Benefits of Relaxation Techniques",
            relaxation_can_help_you:"Relaxation can help you:",
              reduce_anxiety_and_stress:"Reduce anxiety and stress.",
              improve_sleep_quality:"Improve sleep quality.",
              increase_concentration_mental:"Increase concentration and mental clarity.",
              promote_sense_well:"Promote a sense of well-being and calmness.",
              improve_response:"Improve the body's response to stressful situations.",
            suggested_techniques:"Suggested Techniques",
              deep_breathing:"Deep breathing:",
                practice_inhaling:"Practice inhaling deeply through your nose, holding the air for a few seconds and exhaling slowly through your mouth.",
              guided_visualization:"Guided visualization:",
                imagine_quiet_relaxing:"Imagine a quiet, relaxing place, such as a beach or forest, and immerse yourself in that peaceful feeling.",
              yoga_stretching:"Yoga and stretching:",
                perform_gentle_postures:" Perform gentle postures that release accumulated tension in the body and help calm the mind.",
              listen_relaxing:"Listen to relaxing music:",
                select_soft_melodies:"Select soft melodies that help you disconnect and find a state of calm.",
                 
                spend_few_minutes:"Spend a few minutes a day to meditate and focus your mind, allowing thoughts to flow without judgment.",

                //depresión
            overcoming_depression:"Overcoming Depression",
            intoovercoming_depression:"In this video, we discuss the difference between sadness and depression, explaining how depression is an illness that severely affects a person's life.",
            key_aspects_depression:"Key Aspects of Depression",
            depression_just_sadness:"Depression is not just sadness; it involves feeling like you can't cope with life and experiencing a range of symptoms that can be disabling. Some of these symptoms include:",
              loss_interest:"Loss of interest in activities you once enjoyed.",
              concentration_problems:"Concentration problems and constant fatigue.",
              feelings_worthlessness:"Feelings of worthlessness or excessive guilt.",
              sleep_disturbances:"Sleep disturbances (insomnia or hypersomnia).",
              significant_weight:"Significant weight loss without dieting.",
              recurrent_thoughts:"Recurrent thoughts about death or suicide.",
            steps_address_depression:"Steps to Address Depression",
              seek_professional:"Seek professional help:",
                guidance_psychologist: "Guidance from a psychologist or psychiatrist is essential for proper diagnosis and effective treatment." ,
              consider_therapy:"Consider therapy:",
                cognitive_behavioral:"Cognitive behavioral therapy is one of the most effective forms of treatment, helping to identify and change distorted thoughts.",
              medication:"Medication: ",
                alhought_necessary:"Although not always necessary, in some cases antidepressants may be prescribed. It is important not to self-medicate.",
              activity_planning:"Activity planning:",
                recapturing_pleasurable:"Recapturing pleasurable activities can improve mood. Scheduling helps to avoid passivity and isolation.",
              physical_exercise:"Physical exercise:  ",
                moderate_physical:"Moderate physical activity also contributes to improved emotional well-being.",
              
            //ansiedad
            control_anxiety_techniques:"5 Techniques to Control Anxiety",
            intocontrol_anxiety_techniques:"In this video, psychologist Gonzalo Ramirez explains five techniques you can use to calm anxiety in your daily life.",

            summary_techniques:"Summary of Techniques",
            self_instructions:"Self-instructions: ",
            identifying_negative:"Identifying negative thoughts and changing them to positive statements such as “I am capable” or “I am going to do well”.",
            cognitive_distraction:"Cognitive Distraction: ",
            focusing_another_activity:"Focusing the mind on another activity, such as counting objects around, to reduce anxiety symptoms.",
            breating_control:"Breathing Control:",
            practing_show:"Practicing slow, deep breaths to reduce symptoms such as palpitations and nervousness.",
            jacob_progressive:"Jacobson's Progressive Relaxation: ",
            tension_relaxation:"Tension and relaxation of different muscle groups, combined with deep breathing.",
            guided_imagery:"Guided Imagery:",
            visualizing_calm:"Visualizing a calm and safe place to reduce stress and anxiety.",
          important_remember:"It is important to remember that these techniques are not a complete treatment for anxiety. For severe cases, consider seeing a health professional.",

          see_more:"See More",

      //podcast
      //autoestima
        healthy_self_esteem:"How to Achieve Healthy Self-Esteem",
          intohealthy_self_esteem:"In this podcast, explore techniques and strategies for developing a healthy and balanced self-esteem.",
        what_self_esteem:"What is self-esteem?",
          intowhat_self_esteem:"Self-esteem is the valuation that each person has of him/herself. It is key to emotional well-being, as it influences how we relate to others and how we face daily challenges.",
        importance_self_esteem:"Importance of a Healthy Self-Esteem",
          intoimportance_self_esteem:"A balanced self-esteem allows us to accept ourselves as we are, with our strengths and weaknesses. It helps us to set boundaries, have healthy relationships and achieve our goals.",
          tips_strengthening:"Tips for Strengthening Self-Esteem",
          practice_self_compassion:"Practice self-compassion: ",
            treat_yourself_kidness:"Treat yourself with kindness and understanding, especially when you make mistakes.",
          devolep_personal:"Develop personal skills: ",
            engage_activities:"Engage in activities that you enjoy and want to get better at.",
          avoid_comparing:"Avoid comparing yourself: ",
            remember_everyones:"Remember that everyone has a different path.",
          set_achievable:"Set achievable goals:  ",
            setting_realistic:"Setting realistic goals will help you move forward one step at a time.",
          surround_yourself:"Surround yourself with positive people:",
            healthy_relationships:"Healthy relationships contribute to good self-esteem.",
          
          //salud mental
          exhaustion_mental:"How to deal with emotional and mental exhaustion?",
            intoexhaustion_mental:"In this video, we explore emotional and mental exhaustion, its causes and how to deal with it in a healthy way.",
          emotional_exhaustion:"What is Emotional Exhaustion?",
          intoemotional_exhaustion:"Emotional exhaustion is a feeling of being completely drained mentally and emotionally. It can be caused by constant stress, overwhelming responsibilities or difficult personal situations.",
          signs_emotional:"Signs of Emotional Exhaustion",
            feeling_constant:"Feeling of constant fatigue and lack of energy.",
            difficulty_concentrating:"Difficulty concentrating and making decisions.",
            feelings_demotivation:"Feelings of demotivation and hopelessness.",
            irritability_frequent:"Irritability or frequent mood swings.",
            tendency_isolation:"Tendency to isolation or desire to withdraw from others.",
            tips_managing:"Tips for Managing Emotional Exhaustion",
            practice_self_care:"Practice self-care:",
            make_time:"Make time for activities you enjoy and relax.",
            set_boundaries:"Set boundaries: ",
            avoid_overcommitting:"Avoid overcommitting yourself and learn to say no when necessary.",
            excercise:"Exercise:",
            excercise_helps_reduce:"Exercise helps reduce stress and improve mood.",
            connect_others:"Connect with others:",
            talking_friends:"Talking to friends or family members can be a great source of emotional support.",
            seek_professional:"Seek professional help:  ",
            burnout_persists:"If burnout persists, consider talking to a therapist or counselor.",
          
          listen_more:"Listen more",
         
          PDF:"Click on the cover to view the PDF",

          view_more:"View More",
          show_less:"Show Less",

          // Techniques
          meditation: "Meditation",
          intomeditation: "A technique that helps to calm the mind and reduce stress through mindfulness.",

          deepbreathing: "Deep Breathing", 
          intobreathing: "Breathing exercises to relax the body and reduce anxiety.",

          intoyoga:"A practice that combines physical postures, breathing and meditation to improve well-being. ",

          visualization:"Visualization",
          intovisualization: "Technique that involves imagining a calm place or situation to promote relaxation.",

          intomindfulness:"Practice of being present in the present moment, without judgment, to reduce anxiety and stress.",

          muscleprogression:"Muscle Progression",
          intomuscle: "Technique that consists of tensing and relaxing different muscle groups to release tension.",

          musiclistening: "Music Listening",
          intomusic:"Use relaxing music to improve mood and reduce stress.", 

          naturewalk:"Nature Walk",
          intowalk: "Go for a walk outdoors in a natural environment to relax the mind and body.",

          relaxationtechnique:"Relaxation Technique 5-4-3-2-1", 
          intorelaxation: "Method that uses the senses to reduce anxiety by identifying 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell and 1 thing you can taste.",   
          aromatherapy:"Aromatherapy",
          intoaromatherapy:"Use of essential oils to promote relaxation and emotional well-being.", 

          //Profesionales
          contact_professionals:"Contact with Professionals",
          intocontact_professionals:"You'll find a list of mental health professionals available to provide you with the support you need. Each of them specializes in different areas, from psychology to occupational therapy, ensuring that you can find the right help for your needs. Don't hesitate to contact them for guidance, advice and resources to help you on your path to emotional wellness.",
          psychology: "Psychology",
          ana_descripcion:"Dr. Ana Perez has more than 15 years of experience helping patients overcome anxiety disorders, depression and emotional problems. She is a specialist in cognitive-behavioral therapy and is committed to the overall well-being of her patients.",
          psychiatry:"Psychiatry",
          juan_descripcion:"Juan López specializes in the treatment of severe mental disorders such as schizophrenia and bipolar disorder. With a humanistic approach and the use of the latest advances in psychiatry, he seeks to improve the quality of life of his patients.",
          therapy_occupational:"Occupational Therapy",
          maria_descripcion:"Dr. Maria Garcia is an expert in helping patients with physical or mental disabilities develop daily living skills. Her creative and personalized approach has made a difference in the lives of many families.",
          
          //Habitos
          into_habits:"Improve your daily well-being with healthy habits",
          title_table:"Progress of the Week",

          sleep: "Sleep",
          into_sleep:"Make sure you get 7-8 hours of sleep every night to regain energy.",
          meditation:"Meditation",
          into_meditation:"Spend 10-15 minutes meditating to reduce stress and improve concentration.",
          hydration:"Hydration",
          into_hydration:"Drink at least 2 liters of water a day to stay hydrated.', 'Drink at least 2 liters of water a day to stay hydrated.",
          exercise:"Exercise",
          into_exercise:"Get at least 30 minutes of physical exercise every day to improve your health.",
          reading:"Reading",
          into_reading:"Read at least 20 minutes a day to keep your mind active and learn something new.",
          planning:"Planning",
          into_planning:"Spend time planning your day, setting goals and organizing your tasks.",



          monday:"Monday",
          tuesday:"Tuesday",
          wednesday:"Wednesday",
          thursday:"Thursday",
          friday:"Friday",
          saturday:"Saturday",
          sunday:"Sunday",
          task: "Tasks of",
          completed:"Completed",
          complete:"Complete",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          login: "Iniciar Sesión",
          welcome: "Bienvenido",
          description: "MindTrack es una plataforma centrada en el monitoreo y la mejora de la salud mental, enfocándose en el seguimiento de emociones y la práctica de hábitos saludables. En MindTrack ofrecemos un espacio seguro y accesible para fomentar el bienestar emocional y personal. Nuestra misión es apoyarte en tu camino hacia una vida más equilibrada y plena.",
          footer: "2024 MindTrack. Todos los derechos reservados.",
          user: "Nombre de usuario",
          password: "Contraseña",
          enter: "Entrar",
          register: "Registrarse",
          name: "Nombre",
          lastname: "Apellido",
          email: "Correo electronico",
          haveanaccount:"Ya tengo una cuenta", 
          begin: "Comienza ahora",
          features: "Funcionalidades Principales",
          dailyemotion: "Registro Diario de Emociones",
          descriptiondailyemotion:"Registra tus emociones diariamente, detecta patrones y escribe reflexiones personales para entenderte mejor.",
          exercises: "Ejercicios de Relajación",
          descriptionexercises: "Practica técnicas de respiración y meditación con recordatorios para cuidar tu bienestar.",
          habits: "Hábitos Saludables",
          hhabits: "Hábitos",
          descriptionhabits: "Crea y sigue hábitos saludables que promuevan tu bienestar mental y físico.",
          conextion: "Conexión con Profesionales",
          descriptionconextion: "Conéctate con psicólogos y terapeutas para obtener el apoyo profesional que necesitas.",
          resourses: "Recursos Educativos",
          descriptionresourses:"Descubre artículos, videos y podcasts sobre salud mental y recibe recomendaciones personalizadas basadas en tus registros emocionales.",
          articles: "Artículos",
          descriptionarticles: "Accede a una amplia variedad de artículos que abordan temas como la ansiedad, la depresión, el manejo del estrés y técnicas de autocompasión.",
          
          descriptionvideos:"Mira videos que explican conceptos de salud mental, ofrecen técnicas de relajación y comparten testimonios inspiradores.",
  
          descriptionpodcast: "Escucha episodios sobre bienestar emocional, estrategias de superación y entrevistas con expertos en salud mental.",
          resoursesin: "Recursos Interactivos",
          descriptionresoursesin: "Utiliza herramientas interactivas como cuestionarios, ejercicios de reflexión y guías de autoayuda para mejorar tu bienestar.",
          communities: "Comunidades de Apoyo",
          descriptioncommunities: "Conéctate con grupos de apoyo donde puedes compartir experiencias y aprender de otros que enfrentan desafíos similares.",
          recommendations: "Recomendaciones Personalizadas",
          descriptionrecommendations: "Recibe sugerencias de contenido educativo y ejercicios basados en tus registros emocionales y necesidades personales.",
          ia: "Módulo de Inteligencia Artificial",
          descriptionia: "Nuestro sistema de IA detecta patrones emocionales y te sugiere contenido personalizado, como artículos o ejercicios, basado en tus necesidades.",
          odss: "Impacto en el ODS 3",
          ods: "ODS 3",
          descriptionods: "MindTrack contribuye al ODS 3, proporcionando una herramienta asequible para mejorar la salud mental y el bienestar general.",
          ai:"IA",
          homedescription: "En MindTrack, tu bienestar es nuestra prioridad. Este es un lugar seguro para desahogarte y buscar ayuda. Explora nuestras herramientas y recuerda, no estás solo; estamos aquí para apoyarte.",
          feeling: "¿Como estas el dia de hoy?",
          days: "Días Anteriores",
          notes: "Notas Recientes",
          gonotes:"Ir a Notas",
          professionals: "Profesionales",
          techniques: "Ejercicios y Técnicas de Relajación",
          ttechniques:"Ejercicios",
          note: "Nota",
          hide: "Esconder",
          logout: "Cerrar Sesion",
          notess: "Notas",
          calendar:"Calendario",

          //Loading
          loading:"Cargando...",

           //Emociones
           veryhappy: "Muy feliz",
           happy: "Feliz",
           neutral: "Neutral",
           sad: "Triste",
           crying: "Llorando",

          //Calendario
          emotions_calendar:"Calendario de Emociones",
          intoemotions_calendar:"Monitorea tus emociones día a día",
          howdoyoufeel: "¿Cómo te sientes?",
          statistics_emotions:"Estadísticas Emociones",
          insufficient_data:"No hay datos suficientes para mostrar.",

          //Notas
          writethoughts:"¡Escribe tus pensamientos!",
          intowritethoughts:"Utiliza estas notas como una herramienta para explorar tus emociones y fomentar tu crecimiento personal.",
          iintowritethoughts:" Recuerda, cada palabra cuenta en tu viaje hacia el bienestar.",
          wellness_notes:"Notas de Bienestar",
          new_wellness:"Escribe aquí una nueva nota de bienestar...",
          update_note:"Actualizar Nota",
          add_note:"Agregar Nota",


          //Recursos educativos
          educational_resources: "Recursos Educativos",
          intoeducational_resources:"Recopilación de recursos valiosos para apoyar tu bienestar emocional y mental. Desde artículos informativos hasta videos y podcasts inspiradores, nuestro objetivo es proporcionarte herramientas y conocimientos que te ayuden a comprender mejor tu salud mental y a desarrollar estrategias para mejorarla. Explora los recursos disponibles y elige aquellos que más resuenen contigo en tu camino hacia una vida más equilibrada y plena.",
          //Articulos 
            anxietydisorders:"Los trastornos de Ansiedad",
              intoanxiety: "Este artículo proporciona una visión profunda sobre los trastornos de ansiedad, su prevalencia y su impacto en la vida diaria.",
            definition_anxiety:"Definición y Percepción de la Ansiedad",
              intodefinition_anxiety:"A menudo, las personas catalogan a quienes sufren de ansiedad con términos despectivos, lo que puede llevar a un sufrimiento adicional. La ansiedad es un sentimiento normal de temor, pero puede volverse patológica cuando ocurre sin un motivo real.",
            prevalence:"Prevalencia",
              intoprevalence:"Los trastornos de ansiedad son comunes en México, afectando al 14.8% de la población, con mayor incidencia en mujeres y jóvenes.",
            anxiety_disorders:"Clasificación de los Trastornos de Ansiedad",
              intoanxiety_disorders:"Los trastornos incluyen el trastorno de ansiedad generalizada, agorafobia, crisis de pánico, y fobias sociales y específicas.",
            etiology:"Etiología y Fisiología",
              intoetiology:"Se discuten causas hereditarias y disfunciones en neurotransmisores, así como la función del sistema nervioso autónomo.",
            daily_life:"Impacto en la Vida Cotidiana",
              intodaily_life:"La ansiedad puede afectar la concentración y generar distorsiones que dificultan el funcionamiento diario.",
            specific_types:"Tipos Específicos de Trastornos",
              intospecific_types:"Se describen trastornos como la agorafobia y fobias sociales, donde las personas evitan interacciones por miedo a ser evaluadas.",
            conclusion:"Conclusión",
              conclusion_anxiety:"Es vital reconocer los trastornos de ansiedad como condiciones de salud mental que requieren atención y tratamiento.",

          stressmanagement:"Guía de Gestión del Estrés",
          intostressmanagement:"Este artículo proporciona una visión profunda sobre el estrés, su impacto en los adolescentes y su gestión efectiva.",
          introduction_stress:"Introducción al Estrés",
            intointroduction_stress:"El estrés es una reacción normal y fisiológica del cuerpo que nos permite adaptarnos a situaciones difíciles o amenazantes. Durante la adolescencia, este puede intensificarse debido a cambios físicos, psicológicos y emocionales.",
          stress_adolescence:"El Estrés en la Adolescencia",
            intostress_adolescence:"Los cambios hormonales y la búsqueda de identidad pueden generar tensiones que resultan en estrés adaptativo, afectando el bienestar de los jóvenes.",
          stress_recognition:"Reconocimiento del Estrés",
            intostress_recognition:"Es crucial identificar los elementos que contribuyen al estrés y detectar cuando se vuelve desadaptativo, lo cual puede interferir con la vida cotidiana.",
          guide_stress:"¿Para Quién es Esta Guía?",
            intoguide_stress:"Dirigida a educadores, familiares y cualquier persona interesada en el bienestar de adolescentes y jóvenes, buscando herramientas para gestionar el estrés en entornos escolares y comunitarios.",
          objective_stress:"Objetivo de la Guía",
            intobjective_stress:"Esta guía busca fortalecer las medidas de prevención ante situaciones de estrés y promover el bienestar emocional en las escuelas y comunidades.",
          conclusion_stress:"Comprender el estrés y su impacto es vital para apoyar a los jóvenes en su desarrollo y promover su bienestar.",

          mental_health:"¿Qué es la salud mental y por qué es importante?",
            intomental_health:"Este artículo explora el concepto de salud mental, su relevancia en nuestras vidas y cómo influye en el bienestar general.",
          what_is_mental:"¿Qué es la Salud Mental?",
            intowhat_is_mental:"La salud mental es un estado de bienestar en el cual la persona es consciente de sus capacidades, puede afrontar las tensiones normales de la vida, trabajar de forma productiva y contribuir a su comunidad.",
          importance_mental:"Importancia de la Salud Mental",
            intoimportance_mental:"La salud mental afecta cómo pensamos, sentimos y actuamos en cada etapa de nuestra vida. Mantener un equilibrio en esta área permite un desarrollo personal, social y emocional adecuado.",
          factors_mental:"Factores que Afectan la Salud Mental",
            intofactors_mental:"Existen diversos factores que pueden influir en la salud mental, incluyendo factores biológicos como la genética, experiencias de vida como trauma o abuso, y antecedentes familiares de problemas de salud mental.",
          promotion_mental:"Promoción y Cuidado de la Salud Mental",
            intopromotion_mental:"Cuidar nuestra salud mental implica reconocer nuestras emociones, buscar apoyo en momentos de necesidad y adoptar hábitos saludables, como la meditación, el ejercicio regular y el tiempo de descanso adecuado.",

            //Autoestima
          self_esteem:"Guía Práctica para Mejorar la Autoestima",
            intoself_esteem:"Explora cómo mejorar la autoestima a través de hábitos saludables, autoconfianza y valoración personal.",
          what_self:"¿Qué es la Autoestima?",
            intowhat_self:"La autoestima es la percepción y valoración que cada persona tiene de sí misma, influenciada por la autoconfianza, el respeto propio y la satisfacción personal.",
          importance_self:"Importancia de la Autoestima",
            intoimportance_self:"Una autoestima sana permite enfrentar desafíos, tomar decisiones seguras y tener una mejor relación con uno mismo y con los demás. Fortalecerla mejora nuestro bienestar general.",
          factors_self:"Factores que Influyen en la Autoestima",
            intofactors_self:"Factores como las experiencias personales, la crianza y el entorno social pueden influir en cómo una persona se valora a sí misma y percibe sus propias capacidades.",
          improve_self:"¿Cómo Mejorar la Autoestima?",
          intoimprove_self:"Mejorar la autoestima implica reconocer nuestras fortalezas, aceptar nuestras debilidades y cultivar pensamientos positivos. Prácticas como la gratitud y el autocuidado pueden ser beneficiosas.",

          read_more:"Leer más",

          //Videos
            //relajación
          relaxation_techniques:"Técnicas de Relajación",
            intorelaxation_techniques:"En este video, exploramos diferentes técnicas de relajación que pueden ayudarte a reducir el estrés y mejorar tu bienestar emocional.",
          benefits_relaxation:"Beneficios de las Técnicas de Relajación",
            relaxation_can_help_you:"La relajación puede ayudarte a:",
              reduce_anxiety_and_stress:"Reducir la ansiedad y el estrés.",
              improve_sleep_quality:"Mejorar la calidad del sueño.",
              increase_concentration_mental:"Aumentar la concentración y la claridad mental.",
              promote_sense_well:"Promover una sensación de bienestar y calma.",
              improve_response:"Mejorar la respuesta del cuerpo ante situaciones estresantes.",
          suggested_techniques:"Técnicas Sugeridas",
            deep_breathing:"Respiración profunda:  ",
              practice_inhaling:"Practica inhalar profundamente por la nariz, sosteniendo el aire unos segundos y exhalando lentamente por la boca.",
            guided_visualization:"Visualización guiada: ",
              imagine_quiet_relaxing:"Imagina un lugar tranquilo y relajante, como una playa o un bosque, y sumérgete en esa sensación de paz.",
            yoga_stretching:"Yoga y estiramientos:",
              perform_gentle_postures:" Realiza posturas suaves que liberen tensión acumulada en el cuerpo y ayuden a calmar la mente.",
            listen_relaxing:"Escucha música relajante: ",
              select_soft_melodies:"Selecciona melodías suaves que te ayuden a desconectar y a encontrar un estado de calma.",
               
              spend_few_minutes:"Dedica unos minutos al día para meditar y enfocar tu mente, permitiendo que los pensamientos fluyan sin juzgarlos.",

              //depresión
            overcoming_depression:"Superar una Depresión",
            intoovercoming_depression:"En este video, se discute la diferencia entre la tristeza y la depresión, explicando cómo la depresión es una enfermedad que afecta gravemente la vida de una persona.",
            key_aspects_depression:"Aspectos Clave de la Depresión",
            depression_just_sadness:"La depresión no es solo tristeza; implica sentir que no puedes con la vida y experimentar una serie de síntomas que pueden incapacitar. Algunos de estos síntomas incluyen:",
              loss_interest:"Pérdida de interés en actividades que antes disfrutabas.",
              concentration_problems:"Problemas de concentración y fatiga constante.",
              feelings_worthlessness:"Sentimientos de inutilidad o culpa excesiva.",
              sleep_disturbances:"Alteraciones en el sueño (insomnio o hipersomnia).",
              significant_weight:"Pérdida significativa de peso sin dieta.",
              recurrent_thoughts:"Pensamientos recurrentes sobre la muerte o el suicidio.",
            steps_address_depression:"Pasos para Abordar la Depresión",
              seek_professional:"Buscar ayuda profesional: ",
                guidance_psychologist: "Es esencial contar con la guía de un psicólogo o psiquiatra para un diagnóstico adecuado y tratamiento efectivo." ,
              consider_therapy:"Considerar la terapia:",
                cognitive_behavioral:"La terapia cognitivo-conductual es una de las formas más efectivas de tratamiento, que ayuda a identificar y cambiar pensamientos distorsionados.",
              medication:"Medicación: ",
                alhought_necessary:"Aunque no siempre es necesaria, en algunos casos los antidepresivos pueden ser recetados. Es importante no automedicarse.",
              activity_planning:"Planificación de actividades:",
                recapturing_pleasurable:"Recuperar actividades placenteras puede mejorar el estado de ánimo. La programación ayuda a evitar la pasividad y el aislamiento.",
              physical_exercise:"Ejercicio físico: ",
                moderate_physical:"La actividad física moderada también contribuye a la mejora del bienestar emocional.",

          //ansiedad
            control_anxiety_techniques:"5 Técnicas para Controlar la Ansiedad",
            intocontrol_anxiety_techniques:"En este video, el psicólogo Gonzalo Ramírez explica cinco técnicas que puedes utilizar para calmar la ansiedad en tu día a día.",

            summary_techniques:"Resumen de las Técnicas",
            self_instructions:"Autoinstrucciones:",
            identifying_negative:"Identificar pensamientos negativos y cambiarlos por afirmaciones positivas como \"soy capaz\" o \"voy a hacerlo bien\".",
            cognitive_distraction:"Distracción Cognitiva: ",
            focusing_another_activity:"Centrar la mente en otra actividad, como contar objetos alrededor, para reducir los síntomas de ansiedad.",
            breating_control:"Control de la Respiración:",
            practing_show:"Practicar respiraciones lentas y profundas para reducir síntomas como palpitaciones y nerviosismo.",
            jacob_progressive:"Relajación Progresiva de Jacobson",
            tension_relaxation:"Tensión y relajación de diferentes grupos musculares, combinada con respiración profunda.",
            guided_imagery:"Imaginación Guiada:",
            visualizing_calm:"Visualizar un lugar tranquilo y seguro para reducir el estrés y la ansiedad.",
          important_remember:"Es importante recordar que estas técnicas no son un tratamiento completo para la ansiedad. Para casos intensos, considera acudir a un profesional de la salud.",

          see_more:"Ver más",

        //podcast
      //autoestima
        healthy_self_esteem:"Cómo Conseguir una Autoestima Sana",
          intohealthy_self_esteem:"En este podcast, explora técnicas y estrategias para desarrollar una autoestima sana y equilibrada.",
        what_self_esteem:"¿Qué es la Autoestima?",
          intowhat_self_esteem:"La autoestima es la valoración que cada persona tiene de sí misma. Es clave para el bienestar emocional, pues influye en cómo nos relacionamos con los demás y cómo enfrentamos los desafíos diarios.",
        importance_self_esteem:"Importancia de una Autoestima Sana",
          intoimportance_self_esteem:"Una autoestima equilibrada nos permite aceptarnos tal y como somos, con nuestras fortalezas y debilidades. Nos ayuda a establecer límites, tener relaciones sanas y alcanzar nuestras metas.",
        tips_strengthening:"Consejos para Fortalecer la Autoestima",
          practice_self_compassion:"Practica la autocompasión: ",
            treat_yourself_kidness:"Trátate con amabilidad y comprensión, especialmente cuando cometas errores.",
          devolep_personal:"Desarrolla habilidades personales: ",
            engage_activities:"Realiza actividades que disfrutes y en las que quieras mejorar.",
          avoid_comparing:"Evita compararte: ",
            remember_everyones:"Recuerda que cada persona tiene un camino diferente.",
          set_achievable:"Establece metas alcanzables: ",
            setting_realistic:"Definir metas realistas te ayudará a avanzar paso a paso.",
          surround_yourself:"Rodéate de personas positivas:",
            healthy_relationships:" Las relaciones saludables contribuyen a una buena autoestima.",

          //salud mental
          exhaustion_mental:"¿Cómo lidiar con el agotamiento emocional y mental?",
          intoexhaustion_mental:"En este video, exploramos el agotamiento emocional y mental, sus causas y cómo abordarlo de manera saludable.",
          emotional_exhaustion:"¿Qué es el Agotamiento Emocional?",
          intoemotional_exhaustion:"El agotamiento emocional es una sensación de estar completamente exhausto en el aspecto mental y emocional. Puede ser causado por el estrés constante, las responsabilidades abrumadoras o situaciones personales difíciles.",
          signs_emotional:"Signos de Agotamiento Emocional",
            feeling_constant:"Sensación de fatiga constante y falta de energía.",
            difficulty_concentrating:"Dificultad para concentrarse y tomar decisiones.",
            feelings_demotivation:"Sentimientos de desmotivación y desesperanza.",
            irritability_frequent:"Irritabilidad o cambios de humor frecuentes.",
            tendency_isolation:"Tendencia al aislamiento o deseo de alejarse de los demás.",
            tips_managing:"Consejos para Manejar el Agotamiento Emocional",
            practice_self_care:"Practica el autocuidado: ",
            make_time:"Dedica tiempo para actividades que disfrutes y te relajen.",
            set_boundaries:"Establece límites: ",
            avoid_overcommitting:"Evita comprometerte en exceso y aprende a decir no cuando sea necesario.",
            excercise:"Realiza ejercicio físico:",
            excercise_helps_reduce:" El ejercicio ayuda a reducir el estrés y a mejorar el estado de ánimo.",
            connect_others:"Conéctate con los demás:",
            talking_friends:" Hablar con amigos o familiares puede ser una gran fuente de apoyo emocional.",
            seek_professional:"Busca ayuda profesional: ",
            burnout_persists:"Si el agotamiento persiste, considera la posibilidad de hablar con un terapeuta o consejero.",

          listen_more:"Escuchar más",

          PDF:"Haz clic en la portada para ver el PDF",

          videos: "Videos Educativos",

          podcast: "Podcasts",

          view_more:"Ver más",
          show_less:"Ver menos",


          // Techniques
          meditation: "Meditación",
          meditationtechnique:"Una técnica que ayuda a calmar la mente y reducir el estrés a través de la atención plena.",

          deepbreathing: "Respiración Profunda", 
          breathingexercises: "Ejercicios de respiración para relajar el cuerpo y disminuir la ansiedad.",

          practiceyoga:"Una práctica que combina posturas físicas, respiración y meditación para mejorar el bienestar.",

          visualization:"Visualización",
          visualizationtechnique: "Técnica que implica imaginar un lugar o situación tranquila para promover la relajación.",

          practicemindfulness:"Práctica de estar presente en el momento actual, sin juicio, para reducir la ansiedad y el estrés.",

          muscleprogression:"Progresión Muscular",
          techniquemuscle:"Técnica que consiste en tensar y relajar diferentes grupos musculares para liberar tensión.",

          musiclistening: "Escucha de Música",
          usemusic:"Utilizar música relajante para mejorar el estado de ánimo y reducir el estrés.",

          naturewalk:"Caminata en la Naturaleza",
          walkoutdoors:"Salir a caminar al aire libre en un entorno natural para relajar la mente y el cuerpo.",

          relaxationtechnique:"Técnica de Relajación de 5-4-3-2-1",
          intorelaxation:"Método que utiliza los sentidos para reducir la ansiedad al identificar 5 cosas que ves, 4 que sientes, 3 que oyes, 2 que hueles y 1 que puedes saborear.",

          aromatherapy:"Aromaterapia",
          intoaromatherapy:"Uso de aceites esenciales para promover la relajación y el bienestar emocional.",

          //Profesionales
          contact_professionals:"Contacto con Profesionales",
          intocontact_professionals:"Encontrarás una lista de profesionales de la salud mental disponibles para brindarte el apoyo que necesitas. Cada uno de ellos está especializado en diferentes áreas, desde psicología hasta terapia ocupacional, asegurando que puedas encontrar la ayuda adecuada para tus necesidades. No dudes en ponerte en contacto con ellos para recibir orientación, consejos y recursos que te acompañen en tu camino hacia el bienestar emocional.",
          
          psychology:"Psicología",
          ana_descripcion:"La Dra. Ana Pérez cuenta con más de 15 años de experiencia ayudando a pacientes a superar trastornos de ansiedad, depresión y problemas emocionales. Es especialista en terapia cognitivo-conductual y está comprometida con el bienestar integral de sus pacientes.",

          psychiatry:"Psiquiatría",
          juan_descripcion:"El Lic. Juan López se especializa en el tratamiento de trastornos mentales graves como la esquizofrenia y el trastorno bipolar. Con un enfoque humanista y el uso de los últimos avances en psiquiatría, busca mejorar la calidad de vida de sus pacientes.",

          therapy_occupational:"Terapia Ocupacional",
          maria_descripcion:"La Dra. María García es experta en ayudar a pacientes con discapacidades físicas o mentales a desarrollar habilidades para la vida diaria. Su enfoque creativo y personalizado ha marcado una diferencia en la vida de muchas familias.",

          //Habitos
          into_habits:"Mejora tu bienestar diario con hábitos saludables",
          title_table:"Progreso de la Semana",

          sleep: "Sueño",
          into_sleep:"Asegúrate de dormir 7-8 horas cada noche para recuperar energía.",
          meditation:"Meditación",
          into_meditation:"Dedica 10-15 minutos a meditar para reducir el estrés y mejorar la concentración.",
          hydration:"Hidratación",
          into_hydration:"Bebe al menos 2 litros de agua al día para mantenerte hidratado.",
          exercise:"Ejercicio",
          into_exercise:"Realiza al menos 30 minutos de ejercicio físico cada día para mejorar tu salud.",
          reading:"Lectura",
          into_reading:"Lee al menos 20 minutos al día para mantener tu mente activa y aprender algo nuevo.",
          planning:"Planificación",
          into_planning:"Dedica tiempo para planificar tu día, establecer metas y organizar tus tareas.",

          monday:"Lunes",
          tuesday:"Martes",
          wednesday:"Miércoles",
          thursday:"Jueves",
          friday:"Viernes",
          saturday:"Sábado",
          sunday:"Domingo",
          task: "Tareas de",
          completed:"Completado",
          complete:"Completar",

        },
      },
    },
  });

export default i18next;





