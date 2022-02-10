<template>
  <div class="c-timer">
    <span class="c-hour">{{hours}}</span>:<span
    class="c-minute">{{minutes}}</span>:<span
    class="c-second">{{seconds}}</span>
  </div>
</template>

<script>
  // eslint-disable-next-line
  function formatDuring(mss) {
    var days = parseInt(mss / (1000 * 60 * 60 * 24))
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = parseInt((mss % (1000 * 60)) / 1000)

    return {days, hours, minutes, seconds}
  }

  export default {
    name: 'c-timer',
    data() {
      return {
        myexpires: this.expires,
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
        siv: null
      }
    },
    props: {
      expires: {
        type: Number,
        default: 24 * 60 * 60 * 1000
      },
      interval: {
        type: Number,
        default: 1000
      }
    },
    methods: {
      setDate() {
        let formatTime = formatDuring(this.myexpires)
        this.days = formatTime['days']
        this.hours = formatTime['hours'] < 10 ? '0' + formatTime['hours'] : formatTime['hours']
        this.minutes = formatTime['minutes'] < 10 ? '0' + formatTime['minutes'] : formatTime['minutes']
        this.seconds = formatTime['seconds'] < 10 ? '0' + formatTime['seconds'] : formatTime['seconds']
      }
    },
    mounted() {
      this.setDate()

      this.siv = setInterval(() => {
        this.myexpires -= this.interval
        if (this.myexpires < this.interval && this.siv) {
          window.clearInterval(this.siv)
        }
        this.setDate()
      }, this.interval)
    }
  }
</script>

<style lang="stylus">
  .c-timer {
    display: inline-block;
    color: red;

    font-size: 50px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 21, 21, 1);
    letter-spacing: 3px;
  }
</style>
