<template>
  <nav class="navbar navbar-inverse navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-navbar">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End day</a></li>
          <li
            class="dropdown"
            :class="{ open: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="save">Save Data</a></li>
              <li><a href="#" @click="load">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds () {
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomStocks',
        fetch: 'loadData'
      }),
      endDay () {
        this.randomizeStocks()
      },
      save () {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', data)
      },
      load () {
        this.fetch()
      }
    }
  }
</script>

<style>
</style>
