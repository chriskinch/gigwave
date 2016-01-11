
<bandsearch>

  <h1>Search for a band!</h1>

  <form onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button disabled={ !text }>Search</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    this.items = opts.items


      // Register a listener for store change events.
  RiotControl.on('todos_changed', function(items) {
    self.items = items
    self.update()
  }) 

    edit(e) {
      this.text = e.target.value
    }

    add(e) {
      if (this.text) {
        this.items.push({ title: this.text })
        this.text = this.input.value = ''
      }
    }
  </script>

</bandsearch>
