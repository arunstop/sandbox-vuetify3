<template>
  <!-- <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

  <VAppBar>
    <AppBarNavIcon @click="drawer = !drawer"></AppBarNavIcon>

    <VToolbarTitle>Application</VToolbarTitle>
  </VAppBar>

  <VNavigationDrawer v-model="drawer" temporary>
    <!--  -->
  </VNavigationDrawer>

  <VMain class="bg-grey-lighten-2">
    <slot />
  </VMain>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
