import React from 'react';
import { Scale, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#123524',
      padding: '40px 24px',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '48px',
      paddingBottom: '24px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      color: '#e2bc6f',
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#e2bc6f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '18px',
      fontWeight: 700,
    },
    backLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#e2bc6f',
      textDecoration: 'none',
      fontSize: '14px',
    },
    title: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '16px',
    },
    lastUpdated: {
      color: '#a1a1aa',
      fontSize: '14px',
      marginBottom: '48px',
    },
    section: {
      marginBottom: '32px',
    },
    sectionTitle: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '24px',
      fontWeight: 600,
      color: '#e2bc6f',
      marginBottom: '16px',
    },
    text: {
      color: '#d4d4d8',
      lineHeight: 1.8,
      marginBottom: '16px',
    },
    list: {
      color: '#d4d4d8',
      lineHeight: 1.8,
      paddingLeft: '24px',
      marginBottom: '16px',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <a href="/" style={styles.logo}>
            <div style={styles.logoIcon}>
              <Scale size={20} color="#123524" />
            </div>
            <span style={styles.logoText}>
              Адвокат Цонева
            </span>
          </a>
          <a href="/" style={styles.backLink}>
            <ArrowLeft size={16} />
            Назад
          </a>
        </div>

        <h1 style={styles.title}>Политика за поверителност</h1>
        <p style={styles.lastUpdated}>Последна актуализация: Февруари 2025</p>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Въведение</h2>
          <p style={styles.text}>
            Защитата на вашите лични данни е важна за нас. Тази политика за поверителност обяснява как събираме, използваме и защитаваме вашата информация, когато използвате нашия уебсайт.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Събиране на информация</h2>
          <p style={styles.text}>Събираме следната информация:</p>
          <ul style={styles.list}>
            <li>Име и фамилия</li>
            <li>Имейл адрес</li>
            <li>Телефонен номер</li>
            <li>Информация, предоставена чрез формата за контакт</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Използване на информацията</h2>
          <p style={styles.text}>Използваме събраната информация за:</p>
          <ul style={styles.list}>
            <li>Отговор на вашите запитвания</li>
            <li>Предоставяне на правни консултации</li>
            <li>Подобряване на нашите услуги</li>
            <li>Комуникация с вас относно нашите услуги</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Защита на данните</h2>
          <p style={styles.text}>
            Прилагаме подходящи технически и организационни мерки за защита на вашите лични данни от неоторизиран достъп, загуба или унищожаване.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Вашите права</h2>
          <p style={styles.text}>Имате право да:</p>
          <ul style={styles.list}>
            <li>Получите достъп до вашите лични данни</li>
            <li>Поискате коригиране на неточни данни</li>
            <li>Поискате изтриване на вашите данни</li>
            <li>Възразите срещу обработването на данните</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Контакт</h2>
          <p style={styles.text}>
            Ако имате въпроси относно тази политика за поверителност, моля свържете се с нас на:
          </p>
          <p style={styles.text}>
            <strong style={{ color: '#e2bc6f' }}>Email:</strong> imiliana2011@gmail.com<br />
            <strong style={{ color: '#e2bc6f' }}>Телефон:</strong> 0894/335 770<br />
            <strong style={{ color: '#e2bc6f' }}>Адрес:</strong> гр. Карнобат, ул. "Карл Маркс" 2
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;