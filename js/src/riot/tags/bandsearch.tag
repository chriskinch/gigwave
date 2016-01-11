
<bandsearch>

  <h1>Search for a band!</h1>

  <form onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button disabled={ !text }>Search</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    var self = this;
    self.items = opts.items
    

    edit(e) {
      this.text = e.target.value
    }

    add(e) {
      if (this.text) {
        this.items.push({ title: this.text })
        this.text = this.input.value = ''
      }
    }

    // Register a listener for store change events.
    RiotControl.on('gigwave_changed', function(items) {
      self.items = items;
      self.update();
    })

    self.on('mount', function() {
      RiotControl.trigger('gigwave_init');
    })
  </script>

</bandsearch>
