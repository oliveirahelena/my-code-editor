import CSSIcon from '../../../assets/images/css3.svg?component';
import GoIcon from '../../../assets/images/go.svg?component';
import HtmlIcon from '../../../assets/images/html5.svg?component';
import JavaIcon from '../../../assets/images/java.svg?component';
import JavascriptIcon from '../../../assets/images/javascript.svg?component';
import PHPIcon from '../../../assets/images/php.svg?component';
import PythonIcon from '../../../assets/images/python.svg?component';
import RubyIcon from '../../../assets/images/ruby.svg?component';
import TypescriptIcon from '../../../assets/images/typescript.svg?component';
import ReactIcon from '../../../assets/images/react.svg?component';

const ProgrammingLanguagesList = () => {
  const style = {
    padding: '10px',
    height: '50px',
    width: '50px',
  };

  return (
    <div>
      <CSSIcon style={style} />
      <GoIcon style={style} />
      <HtmlIcon style={style} />
      <JavaIcon style={style} />
      <JavascriptIcon style={style} />
      <PHPIcon style={style} />
      <PythonIcon style={style} />
      <RubyIcon style={style} />
      <TypescriptIcon style={style} />
      <ReactIcon style={style} />
    </div>
  );
};

export default ProgrammingLanguagesList;
