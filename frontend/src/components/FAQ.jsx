import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What types of cases does LawerWebAge handle?', a: 'We handle corporate law, civil litigation, family law, estate planning, criminal defense, and real estate law.' },
  { q: 'How do I schedule a consultation?', a: 'You can fill out our contact form, call us directly, or email us. Initial consultations are complimentary.' },
  { q: 'What are your fees?', a: 'Our fee structures vary. We offer hourly rates, flat fees, and contingency arrangements where appropriate.' },
  { q: 'How long will my case take?', a: 'Timelines vary based on complexity. During consultation, we provide realistic timeline estimates.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#FFFAF0',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px',
    },
    tagline: {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      color: '#123524',
      marginBottom: '16px',
      fontWeight: 700,
    },
    title: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 700,
    },
    item: {
      borderBottom: '1px solid rgba(8, 8, 8, 0.05)',
    },
    question: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 0',
      background: 'none',
      border: 'none',
      color: '#123524',
      fontSize: '18px',
      fontWeight: 700,
      textAlign: 'left',
      cursor: 'pointer',
    },
    answer: {
      color: '#272729',
      lineHeight: 1.7,
      paddingBottom: '24px',
      fontWeight: 500,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.title}>Често задавани въпроси</h2>
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              style={styles.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button style={styles.question} onClick={() => setOpen(open === index ? null : index)}>
                {faq.q}
                {open === index ? <Minus size={20} color="#123524" /> : <Plus size={20} color="#123524" />}
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p style={styles.answer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;