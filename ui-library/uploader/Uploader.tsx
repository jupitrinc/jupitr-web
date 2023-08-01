import { useRef } from "react"
import { Button } from "ui-library/button/Button"
import { UploaderProps } from "./Uploader.types"
import { ImagePlus } from "lucide-react"
import { uploaderStyles } from "./Uploader.styles"

export const Uploader: React.FC<UploaderProps> = (uploader) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const styles = uploaderStyles

  return (
    <fieldset
      className={styles.container}
      onClick={() => inputRef.current?.click()}
    >
      <input
        className={styles.input}
        type="file"
        accept={uploader.accept}
        disabled={uploader.disabled}
        name={uploader.name}
        onChange={uploader.onChange}
        ref={inputRef}
      ></input>

      <div className={styles.button}>
        <Button
          icon={<ImagePlus className={styles.icon} />}
          disabled={uploader.disabled}
        />
      </div>

      {uploader.children}
    </fieldset>
  )
}
