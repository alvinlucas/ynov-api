<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>
          <img
      alt="Logo"
      src="~assets/logo.png"
      style="width: auto; height: auto"
    >
        </q-toolbar-title>
        <router-link to="/login">
          Se connecter
        </router-link>
        <q-btn outline label="S'inscrire" color="primary" no-caps class="q-mx-md" to="/register"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
</script>
