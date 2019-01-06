<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Team</h2>
    <p>Team: {{ teamId }}</p>
    <p>Season: {{ seasonId }}</p>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      msg: 'Some Team',
      seasonId: '',
      teamId: ''
    }
  },
  created: function () {
    this.fetchTeam()
  },
  methods: {
    fetchTeam () {
      this.seasonId = this.$route.params.season
      this.teamId = this.$route.params.team
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
