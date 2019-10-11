<style>
  label {
    position: relative;
    color: #fff;
  }
  label:hover {
    color: #72A6AA !important;
  }
  select {
    color: #fff;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    padding: 0 1rem;
  }
  select:hover {
    color: #72A6AA;
  }
  .Idioma {
    display: flex;
    justify-content: center;
  }
  .fa {
    position: absolute;
    top: 3px;
    right: 2px;
    z-index: -1;
  }
</style>

<div class="Idioma">
  <label for="Idioma">
    <select name="Idioma" class="IdiomaSelect" data-content="">
      <option value="1">
        ESPAÑOL
      </option>
      <option value="2">
        MAYA
      </option>
      <option value="3">
        NAHUATL
      </option>

    </select>
    <i class="fa fa-chevron-down" />
  </label>

</div>
