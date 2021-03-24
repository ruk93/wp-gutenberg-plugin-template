const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = window.wp.editor;
const { PanelBody, TextControl } = wp.components;

const Edit = (props) => {
  const { attributes, setAttributes } = props;

  const { variable1 } = attributes;

  const onChangeInput = (e) => {
    setAttributes({variable1 : e})
  }

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody
          title={__("Panel Title", "sidebar-panel-title")}
          initialOpen={true}
        >
          {/* Sample Input Field */}
          <TextControl
            label="Example input field"
            value={variable1}
            onChange={onChangeInput}
          />
        </PanelBody>
      </InspectorControls>
      <div>
        {/* Preview in Editor */}
        Preview in editor {JSON.stringify(attributes)}
      </div>
    </Fragment>
  );
};

export default Edit;
