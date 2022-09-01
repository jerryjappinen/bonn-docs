<template>
  <div>

    <h2>Widths</h2>

    <div class="width">

      <div class="iphone-very-tight">
        iphone-very-tight
      </div>

      <div class="iphone-tight">
        iphone-tight
      </div>

      <div class="iphone">
        iphone
      </div>

      <div class="iphone-loose">
        iphone-loose
      </div>

      <div class="iphone-very-loose">
        iphone-very-loose
      </div>

    </div>

    <h2>Heights</h2>

    <div class="height">

      <div class="iphone-very-tight">
        iphone-very-tight
      </div>

      <div class="iphone-tight">
        iphone-tight
      </div>

      <div class="iphone">
        iphone
      </div>

      <div class="iphone-loose">
        iphone-loose
      </div>

      <div class="iphone-very-loose">
        iphone-very-loose
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.width div,
.height div {
  @include mono;
  border-width: 1px;
}

.width div {
  @include push-pad-vertical;
}

.height {
  @include flex;

  div {
    @include push-pad-right;
  }

}


// Width

.width {
  .iphone-very-tight {
    width: $iphone-very-tight;

    &:after {
      @include block;
      content: '#{$iphone-very-tight}';
    }
  }

  .iphone-tight {
    width: $iphone-tight;

    &:after {
      @include block;
      content: '#{$iphone-tight}';
    }
  }

  .iphone {
    width: $iphone;

    &:after {
      @include block;
      content: '#{$iphone}';
    }
  }

  .iphone-loose {
    width: $iphone-loose;

    &:after {
      @include block;
      content: '#{$iphone-loose}';
    }
  }

  .iphone-very-loose {
    width: $iphone-very-loose;

    &:after {
      @include block;
      content: '#{$iphone-very-loose}';
    }
  }

}



// Height

.height {

  .iphone-very-tight {
    height: $iphone-height-very-tight;

    &:after {
      @include block;
      content: '#{$iphone-height-very-tight}';
    }
  }

  .iphone-tight {
    height: $iphone-height-tight;

    &:after {
      @include block;
      content: '#{$iphone-height-tight}';
    }
  }

  .iphone {
    height: $iphone-height;

    &:after {
      @include block;
      content: '#{$iphone-height}';
    }
  }

  .iphone-loose {
    height: $iphone-height-loose;

    &:after {
      @include block;
      content: '#{$iphone-height-loose}';
    }
  }

  .iphone-very-loose {
    height: $iphone-height-very-loose;

    &:after {
      @include block;
      content: '#{$iphone-height-very-loose}';
    }
  }

}

</style>
