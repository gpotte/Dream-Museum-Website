<template>
  <div class="main jumbotron-fluid d-none d-md-block" id="Download">
    <p class="display-3">Download</p>
    <div class="d-md-flex" style="justify-content: center">
      <DownloadCard
        v-for="(info, x) in DownloadInfos"
        :key="x"
        v-bind:info="info"
        v-bind:index="x"
      />
    </div>
  </div>
</template>

<script>
//import axios from "axios";

import DownloadCard from "@/components/DownloadCard";
import "vue-carousel-card/styles/index.css";

export default {
  name: "Download",
  components: {
    DownloadCard
  },
  data: function() {
    return {
      DownloadInfos: []
    };
  },
  created() {
    //IF MOCKAROO FULL
    this.DownloadInfos = [
      {
        id: 1,
        OS: "Matsoft",
        Version: "2.6",
        Logo: "http://dummyimage.com/250x250.png/dddddd/000000",
        DownloadLink:
          "https://dell.com/curabitur/at/ipsum/ac/tellus/semper/interdum.js?ut=erat&rhoncus=nulla&aliquet=tempus&pulvinar=vivamus&sed=in&nisl=felis&nunc=eu&rhoncus=sapien&dui=cursus&vel=vestibulum&sem=proin&sed=eu&sagittis=mi&nam=nulla&congue=ac&risus=enim&semper=in&porta=tempor&volutpat=turpis&quam=nec&pede=euismod&lobortis=scelerisque&ligula=quam&sit=turpis&amet=adipiscing&eleifend=lorem&pede=vitae&libero=mattis&quis=nibh&orci=ligula&nullam=nec&molestie=sem&nibh=duis&in=aliquam&lectus=convallis&pellentesque=nunc&at=proin&nulla=at&suspendisse=turpis&potenti=a&cras=pede&in=posuere&purus=nonummy&eu=integer&magna=non&vulputate=velit&luctus=donec&cum=diam&sociis=neque&natoque=vestibulum&penatibus=eget&et=vulputate&magnis=ut&dis=ultrices&parturient=vel&montes=augue&nascetur=vestibulum&ridiculus=ante&mus=ipsum&vivamus=primis&vestibulum=in&sagittis=faucibus&sapien=orci&cum=luctus&sociis=et&natoque=ultrices&penatibus=posuere&et=cubilia&magnis=curae&dis=donec&parturient=pharetra&montes=magna&nascetur=vestibulum&ridiculus=aliquet&mus=ultrices&etiam=erat&vel=tortor&augue=sollicitudin&vestibulum=mi&rutrum=sit&rutrum=amet&neque=lobortis&aenean=sapien&auctor=sapien&gravida=non&sem=mi&praesent=integer&id=ac&massa=neque&id=duis&nisl=bibendum&venenatis=morbi&lacinia=non",
        ReleaseDate: "02/08/2020"
      },
      {
        id: 2,
        OS: "Bitwolf",
        Version: "5.0",
        Logo: "http://dummyimage.com/250x250.png/ff4444/ffffff",
        DownloadLink:
          "https://latimes.com/sed/interdum/venenatis/turpis/enim/blandit/mi.js?lacinia=molestie&nisi=lorem&venenatis=quisque&tristique=ut&fusce=erat&congue=curabitur&diam=gravida&id=nisi&ornare=at&imperdiet=nibh&sapien=in&urna=hac&pretium=habitasse&nisl=platea&ut=dictumst&volutpat=aliquam&sapien=augue&arcu=quam&sed=sollicitudin&augue=vitae&aliquam=consectetuer&erat=eget&volutpat=rutrum&in=at&congue=lorem&etiam=integer&justo=tincidunt&etiam=ante&pretium=vel&iaculis=ipsum&justo=praesent&in=blandit&hac=lacinia&habitasse=erat&platea=vestibulum&dictumst=sed&etiam=magna&faucibus=at&cursus=nunc&urna=commodo&ut=placerat&tellus=praesent&nulla=blandit&ut=nam&erat=nulla&id=integer&mauris=pede&vulputate=justo&elementum=lacinia&nullam=eget&varius=tincidunt&nulla=eget&facilisi=tempus&cras=vel&non=pede&velit=morbi&nec=porttitor&nisi=lorem&vulputate=id&nonummy=ligula&maecenas=suspendisse&tincidunt=ornare&lacus=consequat&at=lectus&velit=in&vivamus=est&vel=risus&nulla=auctor&eget=sed&eros=tristique&elementum=in&pellentesque=tempus&quisque=sit&porta=amet&volutpat=sem&erat=fusce&quisque=consequat&erat=nulla",
        ReleaseDate: "06/14/2019"
      },
      {
        id: 3,
        OS: "Bitwolf",
        Version: "2.3.1",
        Logo: "http://dummyimage.com/250x250.png/ff4444/ffffff",
        DownloadLink:
          "http://sohu.com/pretium/quis/lectus/suspendisse/potenti.xml?orci=ipsum&vehicula=ac&condimentum=tellus&curabitur=semper&in=interdum&libero=mauris&ut=ullamcorper&massa=purus&volutpat=sit&convallis=amet&morbi=nulla&odio=quisque&odio=arcu&elementum=libero&eu=rutrum&interdum=ac&eu=lobortis&tincidunt=vel&in=dapibus&leo=at&maecenas=diam",
        ReleaseDate: "10/14/2019"
      },
      {
        id: 4,
        OS: "Daltfresh",
        Version: "0.62",
        Logo: "http://dummyimage.com/250x250.png/ff4444/ffffff",
        DownloadLink:
          "http://europa.eu/molestie/sed/justo/pellentesque/viverra/pede.jpg?nunc=quam&vestibulum=pede&ante=lobortis&ipsum=ligula&primis=sit&in=amet&faucibus=eleifend&orci=pede&luctus=libero&et=quis&ultrices=orci&posuere=nullam&cubilia=molestie&curae=nibh&mauris=in&viverra=lectus&diam=pellentesque&vitae=at&quam=nulla&suspendisse=suspendisse&potenti=potenti&nullam=cras&porttitor=in&lacus=purus&at=eu&turpis=magna&donec=vulputate&posuere=luctus&metus=cum&vitae=sociis&ipsum=natoque&aliquam=penatibus&non=et&mauris=magnis&morbi=dis&non=parturient&lectus=montes&aliquam=nascetur&sit=ridiculus&amet=mus&diam=vivamus&in=vestibulum",
        ReleaseDate: "06/27/2019"
      },
      {
        id: 5,
        OS: "Bamity",
        Version: "2.32",
        Logo: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
        DownloadLink:
          "https://wp.com/vehicula/condimentum.jsp?vivamus=vel&vel=sem&nulla=sed&eget=sagittis&eros=nam&elementum=congue&pellentesque=risus&quisque=semper&porta=porta&volutpat=volutpat&erat=quam&quisque=pede&erat=lobortis&eros=ligula&viverra=sit&eget=amet&congue=eleifend&eget=pede&semper=libero&rutrum=quis&nulla=orci&nunc=nullam&purus=molestie&phasellus=nibh&in=in&felis=lectus&donec=pellentesque&semper=at&sapien=nulla&a=suspendisse&libero=potenti&nam=cras&dui=in&proin=purus&leo=eu&odio=magna&porttitor=vulputate&id=luctus&consequat=cum&in=sociis&consequat=natoque&ut=penatibus&nulla=et&sed=magnis&accumsan=dis&felis=parturient&ut=montes&at=nascetur&dolor=ridiculus&quis=mus&odio=vivamus&consequat=vestibulum&varius=sagittis&integer=sapien&ac=cum&leo=sociis&pellentesque=natoque&ultrices=penatibus&mattis=et&odio=magnis&donec=dis&vitae=parturient&nisi=montes&nam=nascetur&ultrices=ridiculus&libero=mus&non=etiam&mattis=vel&pulvinar=augue&nulla=vestibulum&pede=rutrum&ullamcorper=rutrum&augue=neque&a=aenean&suscipit=auctor&nulla=gravida&elit=sem&ac=praesent&nulla=id&sed=massa&vel=id&enim=nisl&sit=venenatis&amet=lacinia&nunc=aenean&viverra=sit&dapibus=amet&nulla=justo&suscipit=morbi&ligula=ut&in=odio&lacus=cras&curabitur=mi&at=pede",
        ReleaseDate: "01/27/2020"
      }
    ];
    /*axios
      .get(
        "https://my.api.mockaroo.com/CarouselToDownloadShit.json?key=7490e1b0"
      )
      .then(r => {
        this.DownloadInfos = r.data;
        console.log(this.DownloadInfos.length);
      })
      .catch(e => {
        console.log(e);
      });*/
  }
};
</script>

<style scoped>
.display-3 {
  line-height: 2.5;
  display: block;
}
</style>
