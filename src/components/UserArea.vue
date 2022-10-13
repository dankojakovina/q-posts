<template>
  <div class="user-area">
    <div class="user-photo">
      <QAvatar
        size="normal"
        :has-border="true" />
    </div>

    <div class="user-name">
      Danko Jakovina
    </div>
  </div>
</template>

<script>
import QAvatar from './QAvatar.vue';

export default {
  name: 'UserArea',
  components: {
    QAvatar,
  },

};
</script>

<style scoped>
.user-name {
    color: var(--q-secondary);
}
.user-area {
    display: flex;
    align-items: center;
}

.user-photo {
    margin-right: 10px;
}

</style>
