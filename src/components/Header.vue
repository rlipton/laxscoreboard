<template>
  <header>
    <ul>
        <li>
            <router-link :to="{ name: 'HighSchoolBoys' }" class="btn btn-primary">HS Boys</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'Login' }" class="btn btn-primary">Login</router-link>
        </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
