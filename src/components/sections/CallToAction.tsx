import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

export function CallToAction() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section className="py-16 bg-primary text-white">
      <div 
        ref={ref}
        className="container px-4 mx-auto text-center"
      >
        <h2 
          className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Join Our School Community
        </h2>
        <p 
          className={cn(
            "max-w-2xl mx-auto mb-8 opacity-90 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Ready to give your child the gift of quality education? Apply for admission 
          or schedule a visit to experience our campus firsthand.
        </p>
      </div>
    </section>
  );
}