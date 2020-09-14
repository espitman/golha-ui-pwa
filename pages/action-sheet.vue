<template>
  <f7-page>
    <f7-navbar title="Action Sheet" backLink="Back"></f7-navbar>
    <f7-block strong>
      <p class="row">
        <!-- One group, open by direct accessing instance .open() method -->
        <f7-button class="col" raised @click="$refs.actionsOneGroup.open()"
          >One group</f7-button
        >
        <!-- Two groups, open by "actions-open" attribute -->
        <f7-button class="col" raised actions-open="#actions-two-groups"
          >Two groups</f7-button
        >
      </p>
      <p>
        <!-- Actions Grid, open by changing actionGridOpened prop -->
        <f7-button raised @click="actionGridOpened = true"
          >Action Grid</f7-button
        >
      </p>
    </f7-block>

    <!-- One Group -->
    <f7-actions ref="actionsOneGroup">
      <f7-actions-group>
        <f7-actions-label>Do something</f7-actions-label>
        <f7-actions-button bold>Button 1</f7-actions-button>
        <f7-actions-button>Button 2</f7-actions-button>
        <f7-actions-button color="red">Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <!-- Two Groups -->
    <f7-actions id="actions-two-groups">
      <f7-actions-group>
        <f7-actions-label>Do something</f7-actions-label>
        <f7-actions-button bold>Button 1</f7-actions-button>
        <f7-actions-button>Button 2</f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button color="red">Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    <!-- Grid -->
    <f7-actions
      :grid="true"
      :opened="actionGridOpened"
      @actions:closed="actionGridOpened = false"
    >
      <f7-actions-group>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/people-96x96-1.jpg"
            width="48"
          />
          <span>Button 1</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/people-96x96-2.jpg"
            width="48"
          />
          <span>Button 2</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/people-96x96-3.jpg"
            width="48"
          />
          <span>Button 3</span>
        </f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/fashion-96x96-4.jpg"
            width="48"
          />
          <span>Button 4</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/fashion-96x96-5.jpg"
            width="48"
          />
          <span>Button 5</span>
        </f7-actions-button>
        <f7-actions-button>
          <img
            slot="media"
            src="https://cdn.framework7.io/placeholder/fashion-96x96-6.jpg"
            width="48"
          />
          <span>Button 6</span>
        </f7-actions-button>
      </f7-actions-group>
    </f7-actions>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      actionGridOpened: false
    };
  },
  methods: {}
};
</script>
