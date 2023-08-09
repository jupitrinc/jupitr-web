import { useState, useEffect } from "react"

export type RecordingStatus = "recording" | "inactive" | "paused"

export const useVideoRecorder = () => {
  const [permission, setPermission] = useState<boolean>(false)
  const [status, setStatus] = useState<RecordingStatus>("inactive")
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  const [chunks, setChunks] = useState<Blob[]>([])

  useEffect(() => {
    getStream()

    return releaseStream
  }, [])

  const getStream = async () => {
    if ("MediaRecorder" in window) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        })
        setStream(stream)
        setRecorder(new MediaRecorder(stream))
        setPermission(true)
      } catch (error) {
        console.error(error.message)
        setPermission(false)
      }
    } else {
      console.error("Your browser doesn't support media recording.")
      setPermission(false)
    }
  }

  const releaseStream = () => {
    if (stream !== null) {
      stream.getTracks().forEach((track) => track.stop())
    }
  }

  const startRecording = async () => {
    if (stream && recorder) {
      setChunks([])

      recorder.start()
      setStatus("recording")

      handleDataAvailable(recorder)
    }
  }

  const stopRecording = async () => {
    if (recorder) {
      recorder.stop()
      setStatus("inactive")
    }
  }

  const handleDataAvailable = (recorder: MediaRecorder) => {
    recorder.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return
      if (event.data.size === 0) return
      setChunks([event.data])
    }
  }

  const getRecording = () => {
    if (chunks.length) {
      const blob = new Blob(chunks, { type: chunks[0].type })
      return URL.createObjectURL(blob)
    } else {
      return null
    }
  }

  return {
    permission,
    status,
    stream,
    startRecording,
    stopRecording,
    getRecording,
  }
}
