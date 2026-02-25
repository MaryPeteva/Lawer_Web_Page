import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Scale, Users, FileText, Shield, Gavel, ChevronDown, Building, Building2Icon, Landmark, Plus, Minus } from 'lucide-react';

const practices = [
  { 
    icon: Gavel, 
    title: 'Гражданско право.', 
    shortDescription: 'Комплексни правни услуги в гражданското право',
    description: '• Правни консултации по гражданско-правни въпроси\n• Процесуално представителство по граждански дела пред всички съдебни инстанции\n• Изготвяне на искови молби, въззивни и касационни жалби, отговори по граждански дела в областта на, облигационното, търговското, трудовото, вещното, семейното и наследственото право\n• Водене на дела за обезщетения, отговорност за вреди, неустойки по договори, пропуснати ползи и т.н.\n• Охранителни производства – промяна на име\n поставяне под запрещение\n обявяване на отсъствие или смърт\n• Заповедни производства – бързо производство за събиране на вземания /дължими суми/\n• Извънсъдебно уреждане на споровете\n• Изготвяне на договори, пълномощни, споразумения\n• Доброволни и съдебни делби на съсобствени или наследствени имоти\n• Изготвяне на документи и процесуално представителство по дела за домашно насилие. Ограничителна заповед за незабавна защита\n' 
  },
  { 
    icon: Users, 
    title: 'Семейно и наследствено право', 
    shortDescription: 'Подкрепа в семейни правни въпроси',
    description: ' • Искове за присъждане на родителски права. Ограничаване и лишаване от родителски права определяне режим на отношения между родители и деца в предвидените от закона случаи. Съвместно упражняване на родителски права\n• Представителство по дела за развод и изготвяне на споразумение при развод по взаимно съгласие\n• Изготвяне на брачен договор преди и по време на брака. Избиране на режим на имуществени отношения – разделност и съпружеска имуществена общност. Регистрация на брачни договори\n• Съгласие на съда при разпореждане с имущество на дете – недвижим имот, банкова сметка. Заместване съгласието на родителя със съдебно решение – при извеждане на дете извън границите на Република България\n• Водене на дела за първоначално определяне на издръжка и за нейното увеличаване\n• Водене на дела за установяване и оспорване на произход\n• Правно съдействие при пълно и непълно осиновяване\n• Учредяване на настойничество и попечителство\n• Изготвяне на завети и завещания\n• Определяне на наследствен дял и водене на дела за присъждане на по-голям дял от наследственото имущество.\n• Изготвяне на различни документи, пълномощни и декларации-съгласия за извеждане на дете в чужбина и др.' 
  },
  { 
    icon: Shield, 
    title: 'Наказателно право', 
    shortDescription: 'Защита в наказателни производства',
    description: '• Защита в рамките на досъдебно производство - представителство пред разследващи органи и прокурор\n• Съдебна защита по наказателни дела, споразумения с Прокурор\n• Реабилитация на осъдени лица\n' 
  },
  { 
    icon: FileText, 
    title: 'Изпълнително производство', 
    shortDescription: 'Представителство в изпълнителни производства',
    description: '• Заповедно производство - издаване на заповед за изпълнение по чл.410 и чл.417 от ГПК и снабдяване с изпълнителен лист.\n• Представителство пред държавни и частни съдебни изпълнители в съдебно-изпълнителното производство от страна на взискателя/кредитора или длъжника /образуване на изпълнително производство, обжалване на действията и актовете на съдебния изпълнител и т.н./' 
  },
  { 
    icon: Landmark, 
    title: 'Недвижимо имущество', 
    shortDescription: 'Правни услуги при сделки и спорове с недвижими имоти',
    description: '• Проучване на недвижими имоти и даване на правни становища по сделки с тях\n• Съдействие при изготвяне на документи за сключване на предварителни и окончателни договори за всички видове сделки с недвижими имоти\n•Съдействие за разрешаване на имотни казуси за снабдяване с документ за собственост-нотариален акт!\n• Процесуално представителство по дела, свързани с недвижими имоти.' 
  },
  { 
    icon: Landmark, 
    title: 'Регистрация на фирми', 
    shortDescription: 'Правни услуги при регистрация на фирми',
    description: '• Съдействие при избор на подходяща правна форма за осъществяване на бизнес дейност\n• Изготвяне на учредителни документи и подаване на заявление за регистрация в Търговския регистър\n• Съдействие при промени в състава на съдружници, управители, капитал и др. в Търговския регистър\n• Процесуално представителство по дела, свързани с търговски дружества.' 
  },
];

const PracticeAreas = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

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
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
    },
    card: {
      backgroundColor: 'rgba(24, 24, 27, 0.5)',
      border: '1px solid rgba(255,255,255,0.05)',
      padding: '32px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'visible',
    },
    expandedContent: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '100%',
      marginTop: '12px',
      background: 'rgba(24,24,27,0.95)',
      color: '#e6e6e6',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
      zIndex: 40,
    },
    cardExpanded: {
      backgroundColor: 'rgba(97, 218, 251, 0.05)',
      borderColor: 'rgba(97, 218, 251, 0.3)',
    },
    iconBox: {
      width: '56px',
      height: '56px',
      backgroundColor: 'rgba(97, 218, 251, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
    },
    cardTitle: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '12px',
    },
    cardDesc: {
      color: '#a1a1aa',
      lineHeight: 1.6,
    },
  };

  return (
    <section id="practice" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={styles.tagline}>С какво се занимавам</p>
          <h2 style={styles.title}>Правни услуги</h2>
        </motion.div>

        <div style={styles.grid} className="practice-grid">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              style={{
                ...styles.card,
                ...(selectedIndex === index ? styles.cardExpanded : {}),
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={
                selectedIndex !== index
                  ? { borderColor: 'rgba(97, 218, 251, 0.3)' }
                  : {}
              }
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
              layout
            >
              <div style={styles.iconBox}>
                <practice.icon size={28} color="#e2bc6f" />
              </div>
              <h3 style={styles.cardTitle}>{practice.title}</h3>
              
              <div>
                <p style={styles.cardDesc}>{practice.shortDescription}</p>

                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    aria-expanded={selectedIndex === index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(selectedIndex === index ? null : index);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#e2bc6f',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    <span>Прочетете повече</span>
                    {selectedIndex === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {selectedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ ...styles.expandedContent, overflow: 'hidden' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {practice.description.includes('•') ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {practice.description.split('\n').map((line, i) => (
                            <p key={i} style={{ ...styles.cardDesc, margin: 0 }}>
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p style={styles.cardDesc}>{practice.description}</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .practice-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .practice-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default PracticeAreas;