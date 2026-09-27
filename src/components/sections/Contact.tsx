import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { AnimatedText } from '../ui/AnimatedText';
import { socialLinks } from '../../data/socialLinks';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Function to get the icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">
            <AnimatedText text="お問い合わせ" />
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            プロジェクトのご相談やコラボレーションをお考えでしたら、お気軽にご連絡ください！
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">連絡先情報</h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-foreground/80">
                現在フリーランスでの案件を受け付けており、新しい機会についてのご相談も歓迎いたします。一緒に素晴らしいものを作りましょう！
              </p>
              
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-primary-400" />
                <a href="mailto:rintara@tech.com" className="text-foreground hover:text-primary-400 transition-colors">
                  rintara@tech.com
                </a>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold mb-4">SNSで繋がりましょう</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground hover:text-primary-400 transition-colors interactive"
                  aria-label={link.name}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-md bg-foreground/5 border border-foreground/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-md bg-foreground/5 border border-foreground/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 rounded-md bg-foreground/5 border border-foreground/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2 interactive"
              >
                {isSubmitting ? '送信中...' : 'メッセージを送信'}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};