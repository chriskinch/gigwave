
<gigwave>

  <h1>Search for a band!</h1>

  <form onsubmit={ add }>
    <autocomplete each={ type in opts.selects }></autocomplete>
    <button disabled={ !text }>Search</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    var self = this;
    self.items = opts.items

    console.log(self);

    edit(e) {
      this.text = e.target.value
    }

    add(e) {
      if (this.text) {
        this.items.push({ title: this.text })
        this.text = this.input.value = ''
      }
    }

    self.on('mount', function() {
      RiotControl.trigger('gigwave_init');
    })
  </script>

</gigwave>
