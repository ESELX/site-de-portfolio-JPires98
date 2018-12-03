new Vue({
  el: ".navbar",
  data: {
    isActive: false,
  },
  computed: {
    dropdownClasses: function() {
      if (this.isActive) {
        return "dropdown is-active";
      } else {
        return "dropdown";
      }
      console.log("dropdownClasses = " + this.dropdownClasses);
    }
  },
  methods: {
    toggleDropdown: function() {
      this.isActive = !this.isActive;
    }
  }
});
