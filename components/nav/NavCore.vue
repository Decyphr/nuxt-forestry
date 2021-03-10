<template>
  <ul>
    <li><nuxt-link to="/">Link</nuxt-link></li>
    <li><nuxt-link to="/">Link</nuxt-link></li>
    <li><nuxt-link to="/">Link</nuxt-link></li>
    <li>
      <nuxt-link to="/">Parent</nuxt-link>
      <ul>
        <li><nuxt-link to="/">Child</nuxt-link></li>
        <li><nuxt-link to="/">Child</nuxt-link></li>
        <li><nuxt-link to="/">Child</nuxt-link></li>
      </ul>
    </li>
  </ul>
</template>