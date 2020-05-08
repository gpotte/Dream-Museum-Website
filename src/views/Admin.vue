<template>
  <div>
    <UploadNewVersion/>
    <AllVersionsList/>
    <AllObjList/>
  </div>
</template>

<script>
// @ is an alias to /src
import UploadNewVersion from "@/components/UploadNewVersion";
import AllVersionsList from "@/components/AllVersionsList";
import AllObjList from "@/components/AllObjList";

export default {
  name: "Admin",
  components: {
    UploadNewVersion,
    AllVersionsList,
    AllObjList
  }
};
</script>
