import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Адрес', value: 'гр. Карнобат, ул. ”Карл Маркс” 2' },
  { icon: Phone, label: 'Телефон', value: '0894/335 770' },
  { icon: Mail, label: 'Email', value: 'imiliana2011@gmail.com' },
  { icon: Clock, label: 'Работно време', value: 'Понеделник - Петък \n  от 9:00 до 17:00' },
];

const Contact = () => {
  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#123524',
    },
    container: {
      maxWidth: '1280px',
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
      color: '#e2bc6f',
      marginBottom: '16px',
    },
    title: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 700,
      marginBottom: '16px',
    },
    subtitle: {
      color: '#e9d2a5',
      fontSize: '18px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '64px',
    },
    infoList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    infoItem: {
      display: 'flex',
      gap: '16px',
    },
    infoIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: 'rgba(24,24,27,1)',
      border: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    infoLabel: {
      fontSize: '12px',
      color: '#71717a',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '4px',
    },
    infoValue: {
      whiteSpace: 'pre-line',
    },
    form: {
      display: 'grid',
      gap: '24px',
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
    },
    input: {
      width: '100%',
      padding: '16px',
      backgroundColor: 'rgba(24,24,27,1)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#e2bc6f',
      fontSize: '16px',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '16px',
      backgroundColor: 'rgba(24,24,27,1)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: '#e2bc6f',
      fontSize: '16px',
      outline: 'none',
      resize: 'none',
      minHeight: '150px',
    },
    submitBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '16px 32px',
      backgroundColor: '#e2bc6f',
      color: '#000',
      fontWeight: 700,
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    window.location.href = `mailto:contact@lawerwebpage.com?subject=Consultation Request from ${name}&body=${message}%0A%0AFrom: ${name}%0AEmail: ${email}`;
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={styles.tagline}>Свържете се с мен</p>
          <h2 style={styles.title}>Задайте въпрос:</h2>
          <p style={styles.subtitle}>Винаги готова да слуша и да предостави експертно съветване.</p>
        </motion.div>

        <div style={styles.grid} className="contact-grid">
          <motion.div
            style={styles.infoList}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item) => (
              <div key={item.label} style={styles.infoItem}>
                <div style={styles.infoIcon}>
                  <item.icon size={20} color="#e2bc6f" />
                </div>
                <div>
                  <p style={styles.infoLabel}>{item.label}</p>
                  <p style={styles.infoValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            style={styles.form}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div style={styles.formRow} className="form-row">
              <input name="name" placeholder="Вашето име *" required style={styles.input} />
              <input name="email" type="email" placeholder="Email *" required style={styles.input} />
            </div>
            <div style={styles.formRow} className="form-row">
              <input name="phone" placeholder="Телефон" style={styles.input} />
            </div>
            <textarea name="message" placeholder="Вашето запитване*" required style={styles.textarea} />
            <button type="submit" style={styles.submitBtn}>
              Изпрати запитване <ArrowRight size={16} />
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;