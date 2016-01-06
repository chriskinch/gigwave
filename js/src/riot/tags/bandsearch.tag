
<bandsearch>

  <h1>Search for a band!</h1>

  <form onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button disabled={ !text }>Search</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    this.items = opts.items

    edit(e) {
      this.text = e.target.value
    }

    add(e) {
      if (this.text) {
        this.items.push({ title: this.text })
        this.text = this.input.value = ''
      }
    }

    removeAllDone(e) {
      this.items = this.items.filter(function(item) {
        return !item.done
      })
    }

    // an two example how to filter items on the list
    whatShow(item) {
      return !item.hidden
    }

    onlyDone(item) {
     return item.done
   }

    toggle(e) {
      var item = e.item
      item.done = !item.done
      return true
    }
  </script>

</bandsearch>
