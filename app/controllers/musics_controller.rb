class MusicsController < ApplicationController
  def create
    @music = Music.new(music_params)
    @music.save
    redirect_to exercise_path(@music.exercise)
  end

  def update
    @music = Music.find(params[:id])
    @music.update(music_params)
    redirect_to exercise_path(@music.exercise)
  end

  private

  def music_params
    params.require(:music).permit(
      :bpm,
      :key_signature,
      :mode,
      :notes,
      :chords,
      :note_values,
      :chord_values,
      :status
    )
  end
end