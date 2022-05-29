<template>
  <div class="header">
    <div class="header__left">
      <button class="header__btn">
        <img :src="menuImg" alt="menuBars" class="menu-bars" />
      </button>
      <div class="h-title">HandsUp</div>
    </div>
    <div class="header__right">
      <select v-model="lang" class="lang-select" @change="setLang(lang)">
        <option v-for="(item, idx) in languages" :key="idx" :value="item.value">
          {{ item.lang }}
        </option>
      </select>
      <button class="header__btn">
        <img :src="signoutImg" alt="signout" class="signout" />
      </button>
    </div>
  </div>
</template>

<script>
import menuBars from '../../assets/img/menu-bars.svg'
import signout from '../../assets/img/signout.svg'
import { SET_LANG } from '../../store/mutationTypes'
import storage from '../../utils/storageHelper'
export default {
  name: 'LayoutHeader',
  data() {
    return {
      menuImg: menuBars,
      signoutImg: signout,
      lang: storage.locale || 'zh',
      languages: [
        {
          lang: '繁體中文',
          value: 'zh',
        },
        {
          lang: 'English',
          value: 'en',
        },
      ],
    }
  },
  mounted () {
    const lang = storage.locale || 'zh'
    this.setLang(lang)
  },
  methods: {
    setLang(value) {
      this.$store.commit(SET_LANG, value)
      this.$i18n.locale = value
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  background: $primary;
  width: 100%;
  height: 60px;
  padding: 20px 0;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  &__left,
  &__right {
    display: flex;
  }
  &__btn {
    @include reset-btn();
  }
}

.menu-bars .signout {
  cursor: pointer;
  @include img-size(20px, 20px);
}

.h-title {
  font-size: 30px;
  margin-left: 30px;
  color: #ffff;
}

.lang-select {
  display: block;
  margin-right: 20px;
  width: 80px;
  outline: none;
  border: 0;
  background: $primary;
  color: #ffff;
  font-size: 15px;
  cursor: pointer;
}
</style>
