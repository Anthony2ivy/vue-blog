<template>
  <div>
    <Breadcrumb>
      <Card shadow class="full-card">
        <p slot="title">
          <BreadcrumbItem >
            <Icon type="md-home"></Icon>
            发布新博客
          </BreadcrumbItem>
        </p>
        <div>
          <Form :model="uploadBlogForm" label-position="top">
            <FormItem label="标题">
              <Input v-model="uploadBlogForm.title" style="max-width: 700px"></Input>
            </FormItem>
            <FormItem label="简介">
              <Input v-model="uploadBlogForm.remark" type="textarea" style="max-width: 700px"></Input>
            </FormItem>
            <FormItem label="详细内容">
              <div id="editor">
                <textarea style="display:none;">
                  ### Hello Editor.md !
                </textarea>
              </div>
            </FormItem>
          </Form>
        </div>
      </Card>
    </Breadcrumb>
  </div>

</template>

<script>
  window.$ = $
  window.jQuery = $
  export default {
    name: "newBlogPage",
    data:function () {
      return {
        uploadBlogForm:{},
        uploadEditor:{}
      };
    },
    mounted: function () {
      this.uploadEditor = editormd("editor",{
        width:"100%",
        autoHeight : true,
        path:'static/editormd/lib/'
      });
    }
  }
</script>

<style scoped>

</style>
