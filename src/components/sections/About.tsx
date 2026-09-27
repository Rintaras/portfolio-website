import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedText } from '../ui/AnimatedText';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section
      ref={sectionRef}
      id="about"
      className="section"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            style={{ y }}
            className="order-2 md:order-1"
          >
            <h2 className="heading-lg mb-8">
              <AnimatedText text="私について" />
            </h2>
            
            <div className="space-y-4 text-foreground/80">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                フルスタックエンジニアとして、Webアプリケーションの設計・開発から運用まで幅広く手がけています。特にReact、Next.js、Node.jsを使った開発が得意で、ユーザーエクスペリエンスを重視したプロダクト作りを心がけています。
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                プログラミング言語は主にTypeScript、Python、Goを使用し、クラウドサービスはAWSやFirebaseを活用しています。また、UI/UXデザインにも興味があり、ユーザー中心設計を意識した開発を行っています。
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                技術ブログの執筆やオープンソースプロジェクトへの貢献を通じて、開発コミュニティとの交流を大切にしています。常に新しい技術の学習と実践を続けており、品質の高いコードと持続可能なアーキテクチャの構築を目指しています。
              </motion.p>
            </div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a href="#contact" className="btn btn-primary interactive">
                お問い合わせ
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={imageRef}
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};