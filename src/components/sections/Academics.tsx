import { Check, BookOpen, Presentation, Brain, Medal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

export function Academics() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const curricularActivities = [
    "Mathematics and Science",
    "Languages (English, Afrikaans, Local Languages)",
    "Social Sciences",
    "Information Technology",
    "Arts and Culture",
    "Life Orientation"
  ];

  const extraCurricularActivities = [
    "Sports (Soccer, Netball, Athletics)",
    "Choir and Music",
    "Debate Club",
    "Environmental Club",
    "Chess Club",
    "Community Service"
  ];

  return (
    <section id="academics" className="py-16 md:py-24">
      <div 
        ref={ref}
        className="container px-4 mx-auto"
      >
        <div className="text-center mb-12">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Academic Programs
          </h2>
          <div 
            className={cn(
              "h-1 w-20 bg-primary mx-auto mb-6 transition-all duration-700 delay-300",
              inView ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
          />
          <p 
            className={cn(
              "max-w-2xl mx-auto text-gray-600 transition-all duration-700 delay-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Our comprehensive academic program is designed to nurture intellectual curiosity, 
            critical thinking, and a love for learning in every student.
          </p>
        </div>

        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="extracurricular">Extracurricular</TabsTrigger>
            <TabsTrigger value="approach">Our Approach</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curriculum" className="mt-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Core Curriculum</h3>
                <ul className="space-y-4">
                  {curricularActivities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src="/IreneMiddleSchool/images/pexels-khalifa-yahaya-650488521-30058879.jpg"
                  alt="Students in classroom" 
                  className="rounded-lg shadow-md w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="extracurricular" className="mt-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/484087391_625528066952564_4037525802821677592_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFB73l5ha8hQ8OZHiRGshetE_KzJlgd_70T8rMmWB3_vQlq98VpiXXwiYSfvMKP3epUZ6ZmJLxONurefGlMFtVE&_nc_ohc=hXm9vgoHzTgQ7kNvwFXDmXi&_nc_oc=Adk5Q8IkVU8Ok8gQbQEeSWd5DDt7xAiw9vLdUZxQJzcPL_cbHOjIWajPE5bVLX4DIts&_nc_zt=23&_nc_ht=scontent.frba2-1.fna&_nc_gid=MZfQBsXXGDrUgPYQlEa_Pw&oh=00_AfIxC9wfLlN6kL4fFaczEpenXMp4P2ajaoq3EVUn7_8vEg&oe=683D9930"
                  alt="Students in extracurricular activities" 
                  className="rounded-lg shadow-md w-full h-[350px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Extracurricular Activities</h3>
                <ul className="space-y-4">
                  {extraCurricularActivities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="approach" className="mt-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BookOpen className="h-8 w-8 text-primary" />,
                  title: "Student-Centered",
                  description: "Focusing on individual needs and learning styles to help each student succeed."
                },
                {
                  icon: <Presentation className="h-8 w-8 text-primary" />,
                  title: "Interactive Learning",
                  description: "Engaging teaching methods that make learning enjoyable and effective."
                },
                {
                  icon: <Brain className="h-8 w-8 text-primary" />,
                  title: "Critical Thinking",
                  description: "Developing analytical skills and problem-solving abilities."
                },
                {
                  icon: <Medal className="h-8 w-8 text-primary" />,
                  title: "Achievement Recognition",
                  description: "Celebrating student accomplishments and encouraging continuous improvement."
                }
              ].map((approach, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">{approach.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-center">{approach.title}</h3>
                    <p className="text-gray-600 text-center">{approach.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}