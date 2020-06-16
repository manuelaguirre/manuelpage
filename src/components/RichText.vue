<template>
  <v-runtime-template :template="html" />
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template';

export default {
  components: {
    VRuntimeTemplate
  },
  props: {
    html: {
      type: String,
      required: true
    }
  },
  methods: {
    getNode: function(codename, id) {
      const query = this.$static[codename];

      if (typeof(query) === 'undefined') {
        return null;
      }

      const edges = query.edges.filter(
        edge => edge.node.id === id
      );

      if (edges.length === 1) {
        return edges[0].node;
      }

      return null;
    }
  }
};
</script>