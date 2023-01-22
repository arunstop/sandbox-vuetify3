<script lang="ts" setup></script>

<template>
  <v-container>
    <v-row>
      <template v-for="n in 4" :key="n">
        <v-col class="mt-2" cols="12">
          <strong>Category {{ n }}</strong>
        </v-col>

        <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
          <v-sheet height="150">
            <v-btn color="primary"> Button </v-btn>
          </v-sheet>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
