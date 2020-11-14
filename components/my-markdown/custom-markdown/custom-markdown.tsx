import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./custom-markdown.module.scss";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";

class CustomMarkdown {
  private numberList: number[];

  /**
   *
   * @param level: title의 level
   * @private
   *
   * title의 level에 따라 번호를 만들어 주는 메소드
   */
  private getTitleNumber(level) {
    if (level === 1) {
      return;
    }
    this.numberList[level - 2] += 1;
    for (let i = level - 1; i < this.numberList.length - 1; i++) {
      this.numberList[i] = 0;
    }
  }

  /**
   *
   * Custom MyMarkdown
   */
  style() {
    this.numberList = [0, 0, 0, 0, 0];
    return {
      heading: ({ level, children }) => {
        this.getTitleNumber(level);
        const titleNumber = this.numberList.filter((n) => n !== 0).join(".");

        return level === 1 ? (
          <></>
        ) : level === 2 ? (
          <h2>
            {titleNumber}. {children}
          </h2>
        ) : level === 3 ? (
          <h3>
            {titleNumber}. {children}
          </h3>
        ) : level === 4 ? (
          <h4>
            {titleNumber}. {children}
          </h4>
        ) : level === 5 ? (
          <h5>
            {titleNumber}. {children}
          </h5>
        ) : (
          <h6>
            {titleNumber}. {children}
          </h6>
        );
      },
      code: ({ language, value }) => {
        return (
          <div className={styles.codeBlockContainer}>
            <SyntaxHighlighter
              style={codeStyle}
              language={language}
              children={value}
              className={styles.codeBlock}
            />
          </div>
        );
      },
      link: ({ href, children }) => {
        return (
          <a href={href} target="_blank" className={styles.link}>
            <span>참고 사이트</span>
            {children}
          </a>
        );
      },
      listItem: ({ children }) => (
        <li>
          <FontAwesomeIcon className={styles.icon} icon={faCheck} />
          <div>{children}</div>
        </li>
      ),
      emphasis: ({ children }) => (
        <span className={styles.fileTitleWrap}>
          <FontAwesomeIcon className={styles.icon} icon={faFileCode} />
          <span>{children}</span>
        </span>
      ),
      image: ({ src, alt }) => {
        return (
          <img
            src={`
              ${
                process.env.NODE_ENV === "production"
                  ? "https://jojiapp.github.io/blog"
                  : ""
              }/${src}`}
            alt={alt}
          />
        );
      },
    };
  }
}

export default CustomMarkdown;
