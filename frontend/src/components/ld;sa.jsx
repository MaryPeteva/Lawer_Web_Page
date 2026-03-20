import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Адрес', value: 'гр. Карнобат, ул. "Карл Маркс" 2' },
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
    mapContainer: {
      marginTop: '32px',
      border: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
    },
    map: {
      width: '100%',
      height: '250px',
      border: 'none',
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
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    window.location.href = `mailto:imiliana2011@gmail.com?subject=Запитване от ${name}&body=Име: ${name}%0AEmail: ${email}%0AТелефон: ${phone}%0AОбласт: ${subject}%0A%0AСъобщение:%0A${message}`;
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
          <p style={styles.tagline}>Контакти</p>
          <h2 style={styles.title}>Свържете се с нас</h2>
          <p style={styles.subtitle}>Нашият екип е готов да ви изслуша и да предостави експертни насоки.</p>
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

            {/* Google Map */}
            <div style={styles.mapContainer}>
              <iframe
                style={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5869.258161770359!2d26.97892418905311!3d42.648022743230904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a669630cf87297%3A0xc5559fad17aed059!2z0JDQtNCy0L7QutCw0YIg0JjQvNC40LvQuNCw0L3QsCDQptC-0L3QtdCy0LA!5e0!3m2!1sen!2sbg!4v1774022887737!5m2!1sen!2sbg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта на офиса"
              />
            </div>
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
              <input name="email" type="email" placeholder="Email адрес *" required style={styles.input} />
            </div>
            <div style={styles.formRow} className="form-row">
              <input name="phone" placeholder="Телефон" style={styles.input} />
              <select name="subject" style={styles.input} required>
                <option value="">Изберете област *</option>
                <option value="corporate">Корпоративно право</option>
                <option value="litigation">Гражданско право</option>
                <option value="family">Семейно право</option>
                <option value="estate">Наследствено право</option>
                <option value="criminal">Наказателно право</option>
                <option value="realestate">Недвижими имоти</option>
              </select>
            </div>
            <textarea name="message" placeholder="Опишете вашия случай *" required style={styles.textarea} />
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