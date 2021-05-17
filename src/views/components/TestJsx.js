export default {
  render () {
    // console.log('jsx', this.slots)
    return (
      <div>
        {this.$slots.default}
      </div>
    )
  }
}