<!-- https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/3-dots-move.svg?short_path=6f3d064 -->
<template>
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="spinner">
    <circle class="spinner_nOfF" cx="4" cy="12" r="3" />
    <circle class="spinner_nOfF spinner_fVhf" cx="4" cy="12" r="3" />
    <circle class="spinner_nOfF spinner_piVe" cx="4" cy="12" r="3" />
    <circle class="spinner_nOfF spinner_MSNs" cx="4" cy="12" r="3" />
  </svg>
</template>

<style>
.spinner {
  margin-top: -6px;
}

.spinner_nOfF {
  fill: white;
  animation: spinner_qtyZ 2s cubic-bezier(0.36, .6, .31, 1) infinite
}

.spinner_fVhf {
  animation-delay: -.5s
}

.spinner_piVe {
  animation-delay: -1s
}

.spinner_MSNs {
  animation-delay: -1.5s
}

@keyframes spinner_qtyZ {
  0% {
    r: 0
  }

  25% {
    r: 3px;
    cx: 4px
  }

  50% {
    r: 3px;
    cx: 12px
  }

  75% {
    r: 3px;
    cx: 20px
  }

  100% {
    r: 0;
    cx: 20px
  }
}
</style>