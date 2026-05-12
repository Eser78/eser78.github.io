export const supportedLocales = ['en', 'de', 'es', 'fr', 'it', 'pt'] as const;

export type Locale = (typeof supportedLocales)[number];
export type LegalDocumentType = 'privacyPolicy' | 'termsOfUse' | 'legalNotice';

export const legalDocumentSlugs: Record<LegalDocumentType, string> = {
  privacyPolicy: 'privacy-policy',
  termsOfUse: 'terms-of-use',
  legalNotice: 'legal-notice',
};

export const localeConfig: Record<
  Locale,
  {
    label: string;
    hubPath: string;
    reveraPath: string;
    labels: {
      languageSelection: string;
      legal: string;
      privacyPolicy: string;
      termsOfUse: string;
      legalNotice: string;
      backToRevera: string;
      lastUpdated: string;
      rights: string;
      contact: string;
    };
    legalTitles: Record<LegalDocumentType, string>;
    legalDescriptions: Record<LegalDocumentType, string>;
  }
> = {
  en: {
    label: 'EN',
    hubPath: '/',
    reveraPath: '/revera',
    labels: {
      languageSelection: 'Language selection',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      legalNotice: 'Legal Notice',
      backToRevera: 'Back to Revera',
      lastUpdated: 'Last updated',
      rights: 'All rights reserved.',
      contact: 'Contact',
    },
    legalTitles: {
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      legalNotice: 'Legal Notice',
    },
    legalDescriptions: {
      privacyPolicy: 'Privacy Policy for the Revera app by ESOciate.',
      termsOfUse: 'Terms of Use for the Revera app by ESOciate.',
      legalNotice: 'Legal Notice (Impressum) for Revera by ESOciate.',
    },
  },
  de: {
    label: 'DE',
    hubPath: '/de',
    reveraPath: '/de/revera',
    labels: {
      languageSelection: 'Sprachauswahl',
      legal: 'Rechtliches',
      privacyPolicy: 'Datenschutzerklärung',
      termsOfUse: 'Nutzungsbedingungen',
      legalNotice: 'Impressum',
      backToRevera: 'Zurück zu Revera',
      lastUpdated: 'Zuletzt aktualisiert',
      rights: 'Alle Rechte vorbehalten.',
      contact: 'Kontakt',
    },
    legalTitles: {
      privacyPolicy: 'Datenschutzerklärung',
      termsOfUse: 'Nutzungsbedingungen',
      legalNotice: 'Impressum',
    },
    legalDescriptions: {
      privacyPolicy: 'Datenschutzerklärung für die Revera-App von ESOciate.',
      termsOfUse: 'Nutzungsbedingungen für die Revera-App von ESOciate.',
      legalNotice: 'Impressum für Revera von ESOciate.',
    },
  },
  es: {
    label: 'ES',
    hubPath: '/es',
    reveraPath: '/es/revera',
    labels: {
      languageSelection: 'Selección de idioma',
      legal: 'Legal',
      privacyPolicy: 'Política de privacidad',
      termsOfUse: 'Condiciones de uso',
      legalNotice: 'Aviso legal',
      backToRevera: 'Volver a Revera',
      lastUpdated: 'Última actualización',
      rights: 'Todos los derechos reservados.',
      contact: 'Contacto',
    },
    legalTitles: {
      privacyPolicy: 'Política de privacidad',
      termsOfUse: 'Condiciones de uso',
      legalNotice: 'Aviso legal',
    },
    legalDescriptions: {
      privacyPolicy: 'Política de privacidad de la app Revera de ESOciate.',
      termsOfUse: 'Condiciones de uso de la app Revera de ESOciate.',
      legalNotice: 'Aviso legal (Impressum) de Revera de ESOciate.',
    },
  },
  fr: {
    label: 'FR',
    hubPath: '/fr',
    reveraPath: '/fr/revera',
    labels: {
      languageSelection: 'Sélection de la langue',
      legal: 'Mentions légales',
      privacyPolicy: 'Politique de confidentialité',
      termsOfUse: 'Conditions d’utilisation',
      legalNotice: 'Mentions légales',
      backToRevera: 'Retour à Revera',
      lastUpdated: 'Dernière mise à jour',
      rights: 'Tous droits réservés.',
      contact: 'Contact',
    },
    legalTitles: {
      privacyPolicy: 'Politique de confidentialité',
      termsOfUse: 'Conditions d’utilisation',
      legalNotice: 'Mentions légales',
    },
    legalDescriptions: {
      privacyPolicy: 'Politique de confidentialité de l’app Revera par ESOciate.',
      termsOfUse: 'Conditions d’utilisation de l’app Revera par ESOciate.',
      legalNotice: 'Mentions légales (Impressum) de Revera par ESOciate.',
    },
  },
  it: {
    label: 'IT',
    hubPath: '/it',
    reveraPath: '/it/revera',
    labels: {
      languageSelection: 'Selezione lingua',
      legal: 'Legale',
      privacyPolicy: 'Informativa sulla privacy',
      termsOfUse: 'Termini di utilizzo',
      legalNotice: 'Note legali',
      backToRevera: 'Torna a Revera',
      lastUpdated: 'Ultimo aggiornamento',
      rights: 'Tutti i diritti riservati.',
      contact: 'Contatto',
    },
    legalTitles: {
      privacyPolicy: 'Informativa sulla privacy',
      termsOfUse: 'Termini di utilizzo',
      legalNotice: 'Note legali',
    },
    legalDescriptions: {
      privacyPolicy: 'Informativa sulla privacy per l’app Revera di ESOciate.',
      termsOfUse: 'Termini di utilizzo per l’app Revera di ESOciate.',
      legalNotice: 'Note legali (Impressum) per Revera di ESOciate.',
    },
  },
  pt: {
    label: 'PT',
    hubPath: '/pt',
    reveraPath: '/pt/revera',
    labels: {
      languageSelection: 'Seleção de idioma',
      legal: 'Legal',
      privacyPolicy: 'Política de privacidade',
      termsOfUse: 'Termos de uso',
      legalNotice: 'Aviso legal',
      backToRevera: 'Voltar para Revera',
      lastUpdated: 'Última atualização',
      rights: 'Todos os direitos reservados.',
      contact: 'Contato',
    },
    legalTitles: {
      privacyPolicy: 'Política de privacidade',
      termsOfUse: 'Termos de uso',
      legalNotice: 'Aviso legal',
    },
    legalDescriptions: {
      privacyPolicy: 'Política de privacidade do app Revera da ESOciate.',
      termsOfUse: 'Termos de uso do app Revera da ESOciate.',
      legalNotice: 'Aviso legal (Impressum) do Revera da ESOciate.',
    },
  },
};

export function getLegalPath(locale: Locale, documentType: LegalDocumentType) {
  return `${localeConfig[locale].reveraPath}/${legalDocumentSlugs[documentType]}`;
}

export function getHubAlternates() {
  return [
    ...supportedLocales.map((locale) => ({
      lang: locale,
      path: localeConfig[locale].hubPath,
    })),
    { lang: 'x-default', path: localeConfig.en.hubPath },
  ];
}

export function getReveraAlternates() {
  return [
    ...supportedLocales.map((locale) => ({
      lang: locale,
      path: localeConfig[locale].reveraPath,
    })),
    { lang: 'x-default', path: localeConfig.en.reveraPath },
  ];
}

export function getLegalAlternates(documentType: LegalDocumentType) {
  return [
    ...supportedLocales.map((locale) => ({
      lang: locale,
      path: getLegalPath(locale, documentType),
    })),
    { lang: 'x-default', path: getLegalPath('en', documentType) },
  ];
}
