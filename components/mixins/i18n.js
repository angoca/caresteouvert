import { mapState } from 'vuex';
import config from '../../config.json';
import caresteouvert from '../../assets/caresteouvert.svg';
import bleibtoffen from '../../assets/bleibtoffen.svg';
import sigueabierto from '../../assets/sigueabierto.png';
import segueaberto from '../../assets/segueaberto.png';
import esobert from '../../assets/esobert.png';
import ollaanauki from '../../assets/ollaanauki.svg';
import caresteouvertMobile from '../../assets/logo_header.png';
import bleibtoffenMobile from '../../assets/bleibtoffen-mobile.svg';
import sigueabiertoMobile from '../../assets/sigueabierto-mobile.png';
import esobertMobile from '../../assets/esobert-mobile.png';
import segueabertoMobile from '../../assets/segueaberto-mobile.png';
import ollaanaukiMobile from '../../assets/ollaanauki-mobile.svg';
import caresteouvertOg from '../../assets/caresteouvert-og.jpg';
import bleibtoffenOg from '../../assets/bleibtoffen-og.jpg';

export default {
  computed: {
    ...mapState(['country']),

    i18nLinks() {
      const links = config[this.$i18n.locale] || config.en;
      return {
        ...config.defaults,
        ...links
      };
    },

    countryConfig() {
      return config[this.country.toLowerCase()] || this.i18nLinks;
    },

    logo() {
      return {
        caresteouvert,
        bleibtoffen,
        sigueabierto,
        segueaberto,
        esobert,
        ollaanauki
      }[this.i18nLinks.brand];
    },

    logoMobile() {
      return {
        caresteouvert: caresteouvertMobile,
        bleibtoffen: bleibtoffenMobile,
        sigueabierto: sigueabiertoMobile,
        segueaberto: segueabertoMobile,
        esobert: esobertMobile,
        ollaanauki: ollaanaukiMobile
      }[this.i18nLinks.brand];
    },

    logoOg() {
      return {
        caresteouvert: caresteouvertOg,
        bleibtoffen: bleibtoffenOg,
        sigueabierto,
        segueaberto,
        esobert,
        ollaanauki
      }[this.i18nLinks.brand];
    },

    brand() {
      return this.i18nLinks.brand_text;
    }
  }
}
