export const Chessboard = ({
    showKey,
    numberOfCells,
    piecesMap,
    onPiecesMapChanges
}) => {
    return (
        <ChessboardContext.Provider
            value={{ showKey, numberOfCells, piecesMap, onPiecesMapChanges }}
        >
            <Chessboard />
        </ChessboardContext.Provider>
    )
}