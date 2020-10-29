<template>
  <f7-page @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar>
      <InnerNavbar title="title" />
    </f7-navbar>
    <div class="main">
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </div>
  </f7-page>
</template>

<script>
import page from "../mixins/page";
export default {
  mixins: [page]
};
</script>
